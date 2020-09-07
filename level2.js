class level_2{
    l2q =  ["ஒழுக்கம்","விழுப்பந்","தரலான்","ஒழுக்கம்","உயிரினும்","ஓம்பப்","படும்"];
    l2ca = ["ஒழுக்கம்","விழுப்பந்","தரலான்","ஒழுக்கம்","உயிரினும்","ஓம்பப்","படும்"];  
  constructor(){
    level2_btn = createButton('Level - 2')
    ua = [];
 
    }
  hide(){
     level2_btn.hide();
     level3_btn.hide();
    level1_btn.hide();
   // this.greeting.hide();
     }
    
    display(){
    level2_btn.position(displayWidth/2 - 70, displayHeight/2.4 )
    level2_btn.class("customButton");
    level2_btn.mousePressed(()=>{
      level1_btn.hide();
    level2_btn.hide();
    level3_btn.hide();
      createQuestion(this.l2q,this.l2ca);
    })
    
    }


}