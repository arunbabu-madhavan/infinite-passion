import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IParticleSetting } from './IParticleSetting';

@Component({
  selector: 'app-particle-animation',
  template: `<canvas #particleCanvas width="900" height="520">
            Your browser does not support HTML5 canvas.
            </canvas>`
})
export class ParticleAnimationComponent implements OnInit {
  @ViewChild('particleCanvas') canvasRef:ElementRef;

  private sphereRadius:number;
  private wait:number;
  private count:number;
  private displayWidth:number;
  private displayHeight:number;
  private numToAddEachFrame:number;
  private particleAlpha:number;
  private particleSettings: IParticleSetting;
  private fLen:number;
  private zMax:number;
  private projCenterX:number;
  private projCenterY:number;
  private sphereCenterX:number;
  private sphereCenterY:number;
  private sphereCenterZ:number;
  
  private zeroAlphaDepth:number;
  private turnAngle:number;
  private turnSpeed:number;
  private x0:number;
  private y0:number;
  private z0:number;
  private particleList:any;
  private objectPool:any;
  private m:number;
  private gravity:number;
  private outsideFrame:boolean;
  private theta:number;
  private phi:number;
  private randAccelX:number;
  private randAccelY:number
  private randAccelZ:number;
  private rgbString:string;
  private rotX:number;
  private rotZ:number;
  private depthAlphaFactor:number;
  private nextParticle:any;
	private sinAngle:number;
	private cosAngle:number;
  constructor(private ngZone: NgZone) { }

  ngOnInit() {

      this.particleSettings = {
        r:70,
        g:255,
        b:140,
        radius:2.5
      }
      this.nextParticle = null;
      this.wait = 1;
      this.count = (this.wait - 1);
      this.numToAddEachFrame = 8;
      this.rgbString = "rgba("+this.particleSettings.r+","+this.particleSettings.g+","+this.particleSettings.b+","; //partial string for color which will be completed by appending alpha value.
      this.particleAlpha = 1; //maximum alpha
      this.displayHeight = this.canvasRef.nativeElement.height;
      this.displayWidth = this.canvasRef.nativeElement.width; 
        
      this.projCenterX = this.displayWidth/2;
      this.projCenterY = this.displayHeight/2;
        
      this.fLen = 320;
      this.zMax = this.fLen - 2;
      this.randAccelX = 0.0;
      this.randAccelY = 0.0;
      this.randAccelZ = 0.0;
      
      this.particleList = {};
      this.objectPool = {};
      this.gravity = 0;
     
      this.sphereRadius = 280;
      this.sphereCenterX = 0;
      this.sphereCenterY = 0;
      this.sphereCenterZ = -3 - this.sphereRadius;
        //alpha values will lessen as particles move further back, causing depth-based darkening:
      this.zeroAlphaDepth = -750; 
        
      this.turnSpeed = 2*Math.PI/1900; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
      this.turnAngle = 0; //initial angle
      this.ngZone.runOutsideAngular(()=>this.animate());
  }

  private animate(){
      let context: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
      this.count++;
          if(this.count >= this.wait){
            this.count = 0;
            for(let i=0;i<this.numToAddEachFrame;i++){
              this.theta = Math.random()*2*Math.PI;
              this.phi = Math.acos(Math.random()*2-1);
              this.x0 = this.sphereRadius*Math.sin(this.phi)*Math.cos(this.theta);
              this.y0 = this.sphereRadius*Math.sin(this.phi)*Math.sin(this.theta);
              this.z0 = this.sphereRadius*Math.cos(this.phi);
              var p = this.addParticle(this.x0, this.sphereCenterY + this.y0, this.sphereCenterZ + this.z0, 0.002*this.x0, 0.002*this.y0, 0.002*this.z0);
      
              //we set some "envelope" parameters which will control the evolving alpha of the particles.
              p.attack = 50;
              p.hold = 50;
              p.decay = 160;
              p.initValue = 0;
              p.holdValue = this.particleAlpha;
              p.lastValue = 0;
              
              //the particle will be stuck in one place until this time has elapsed:
              p.stuckTime = 80 + Math.random()*20;
              
              p.accelX = 0;
              p.accelY = this.gravity;
              p.accelZ = 0;
            }
          }
          this.turnAngle = (this.turnAngle + this.turnSpeed) % (2*Math.PI);
          this.sinAngle = Math.sin(this.turnAngle);
          this.cosAngle = Math.cos(this.turnAngle);
          
          context.fillStyle = "#000000";
          context.fillRect(0,0,this.displayWidth,this.displayHeight);
          
          p = this.particleList.first;
          while (p != null) {
            this.nextParticle = p.next;
            //update age
            p.age++;
            
            //if the particle is past its "stuck" time, it will begin to move.
            if (p.age > p.stuckTime) {
              p.velX += p.accelX + this.randAccelX*(Math.random()*2 - 1);
              p.velY += p.accelY + this.randAccelY*(Math.random()*2 - 1);
              p.velZ += p.accelZ + this.randAccelZ*(Math.random()*2 - 1);
              
              p.x += p.velX;
              p.y += p.velY;
              p.z += p.velZ;
            }
            
            this.rotX = this.cosAngle*p.x + this.sinAngle*(p.z - this.sphereCenterZ);
            this.rotZ = -this.sinAngle*p.x + this.cosAngle*(p.z - this.sphereCenterZ) + this.sphereCenterZ;
            this.m = this.fLen/(this.fLen - this.rotZ);
            p.projX = this.rotX*this.m + this.projCenterX;
            p.projY = p.y*this.m + this.projCenterY;
            
            //update alpha according to envelope parameters.
            if (p.age < p.attack+p.hold+p.decay) {
              if (p.age < p.attack) {
                p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;
              }
              else if (p.age < p.attack+p.hold) {
                p.alpha = p.holdValue;
              }
              else if (p.age < p.attack+p.hold+p.decay) {
                p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
              }
            }
            else {
              p.dead = true;
            }
            
            if ((p.projX > this.displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>this.displayHeight)||(this.rotZ>this.zMax)) {
                this.outsideFrame = true;
            }
            else {
              this.outsideFrame = false;
            }
            
            if (this.outsideFrame||p.dead) {
              this.recycle(p);
            }
            else{
              this.depthAlphaFactor = (1-this.rotZ/this.zeroAlphaDepth);
              this.depthAlphaFactor = (this.depthAlphaFactor > 1) ? 1 : ((this.depthAlphaFactor<0) ? 0 : this.depthAlphaFactor);
              context.fillStyle = this.rgbString + this.depthAlphaFactor*p.alpha + ")";
              
              //draw
              context.beginPath();
              context.arc(p.projX, p.projY, this.m*this.particleSettings.radius, 0, 2*Math.PI, false);
              context.closePath();
              context.fill();
            }
            p = this.nextParticle;
          }
    requestAnimationFrame(()=>this.animate());
  }

  private addParticle(x0,y0,z0,vx0,vy0,vz0):any {
    let newParticle:any;
    let color:string;

    //check recycle bin for available drop:
    if (this.objectPool.first != null) {
      newParticle = this.objectPool.first;
      //remove from bin
      if (newParticle.next != null) {
        this.objectPool.first = newParticle.next;
        newParticle.next.prev = null;
      }
      else {
        this.objectPool.first = null;
      }
    }
    //if the recycle bin is empty, create a new particle (a new ampty object):
    else {
      newParticle = {};
    }

    //add to beginning of particle list
    if (this.particleList.first == null) {
      this.particleList.first = newParticle;
      newParticle.prev = null;
      newParticle.next = null;
    }
    else {
      newParticle.next = this.particleList.first;
      this.particleList.first.prev = newParticle;
      this.particleList.first = newParticle;
      newParticle.prev = null;
    }
    
    //intialize
    newParticle.x = x0;
    newParticle.y = y0;
    newParticle.z = z0;
    newParticle.velX = vx0;
    newParticle.velY = vy0;
    newParticle.velZ = vz0;
    newParticle.age = 0;
    newParticle.dead = false;
    if (Math.random() < 0.5) {
      newParticle.right = true;
    }
    else {
      newParticle.right = false;
    }
    return newParticle;	
  }

  private recycle(p):void {
    if (this.particleList.first == p) {
      if (p.next != null) {
        p.next.prev = null;
        this.particleList.first = p.next;
      }
      else {
        this.particleList.first = null;
      }
    }
    else
    {
      if (p.next == null) {
        p.prev.next = null;
      }
      else {
        p.prev.next = p.next;
        p.next.prev = p.prev;
      }
    }
    //add to recycle bin
    if (this.objectPool.first == null) {
      this.objectPool.first = p;
      p.prev = null;
      p.next = null;
    }
    else {
      p.next = this.objectPool.first;
      this.objectPool.first.prev = p;
      this.objectPool.first = p;
      p.prev = null;
    }
  }
}

