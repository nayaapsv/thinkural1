class Form {

    constructor() {
      this.name = createInput("").attribute("placeholder", "Name");
      this.name.style('width','250px')
      this.name.class("customInput");
      this.play = createButton("PLAY");
    this.play.class("customButton");
      this.greeting = createElement('h1');
      this.title = createElement('h2');
      this.greeting2= createElement('h1')
    // world.add(this.greeting)
    }
    hide(){
      this.greeting.hide();
      this.play.hide();
      this.name.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("THINK   KURAL ");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.play.position(displayWidth/2 -10, displayHeight/2);
      
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.greeting2.position(displayWidth/2 - 70, displayHeight/2);
     
    


      this.play.mousePressed(()=>{
        this.name.hide();
        this.play.hide();
        
     
    level1 = new level_1();
    level1.display();
    level2 = new level_2();
    level2.display();
    level3 = new level_3();
    level3.display();
    // test1 = new test();
    //test1.display();
    
    
      });
  
    }
  }
