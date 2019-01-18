//  game object
var game={
    // 显示的时间
    display_time: 60,
    // 分数
    score: 0,
    level: 1,
    score: 0,
    // 翻开了多少张卡
    Num_Fliped_Card:0,
    // 第一张卡片的class name
    card1:null,
    // 第二张卡片的class name
    card2:null,

};
// new game section
//  new level 1 game
function level_1(){ 
       var New_Game = document.querySelector('.game-stats__button');
       var game_board = document.querySelector('.game-board');
       var time_bar= document.querySelector(".game-timer__bar");
       //create a array of class name
       var Class_Name=["css3","html5"];  
       var score=document.querySelector(".game-stats__score--value");
       score.innerHTML=game.score;
      //重新开始的时候让他显示60秒 合满血状态
       time_bar.innerHTML="60s";
       time_bar.style.width="100%";
        //  set attribute
       game_board.setAttribute('style','grid-template-columns: 1fr 1fr;');

       //  change button name
       New_Game.innerHTML="End Game";
       //change html(innerhtml 只有在这个function 有效)
      // game_board.innerHTML='<div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div> </div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div><div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div></div>'
      // 这是一个记录等待匹配元素的数组 后面需要用来匹配的
       var used=[];
     // lvel 1专用 把匹配成功的元素放在这里从而防止4张牌都一样
       var usedEle;
       // level just have 4 cards 一定要确认每张卡都是一对的
       //  随机卡牌  
       for(var i=0;i<4;i++){
        // 随机0到1 包括1的整数 level 1 专用要是匹配出来的是用过的元素就继续匹配
        var index=random(0,1);
        while(Class_Name[index]==usedEle){
            index=random(0,1);
        }
         //如果还剩下4-i(还剩下多少空位)=used 的长度时候触发 因为这说明后面的几个位置得全部给未匹配成功的元素
         if((4-i)==used.length){
            var used_index=random(0,(used.length-1));
            game_board.innerHTML+='<div class="card'+' '+used[used_index]+'" data-tech="'+used[used_index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
            //删除掉里面的元素啊
            used.splice(used.indexOf(used[used_index]),1);
            }else{
         //如果这里就用+=会把那个前面介绍也弄进去的
         if(i==0){
            game_board.innerHTML='<div class="card'+' '+Class_Name[index]+'" data-tech="'+Class_Name[index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
                 // 把使用过的元素放入数组
                 used.push(Class_Name[index]);
         }else{
            game_board.innerHTML+='<div class="card'+' '+Class_Name[index]+'" data-tech="'+Class_Name[index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
             // 判断used 数组里面是否存在这个元素 不存在就-1 确保元素的唯一性
             if(used.indexOf(Class_Name[index])==-1){
                // 把使用过的元素放入数组
                used.push(Class_Name[index]);
            }else{
              // 第一个指删除元素的index 第二个指删除的数目 匹配成功后删除
              used.splice(used.indexOf(Class_Name[index]),1);
               usedEle=Class_Name[index];//level 1专用 把匹配成功的元素放在这里
           }
        } 
    } 
 }
        // The class of innerHTML's tag(such as card css3 ) just effect in this section so I just can use flip function in this function
       // 这个界面是点击后才会出现的 所以里面的类名也应该在这里
       flip(); 
       time(); 
}
function Level2(){
    var New_Game = document.querySelector('.game-stats__button');
       var game_board = document.querySelector('.game-board');
       var time_bar= document.querySelector(".game-timer__bar");
       //create a array of class name
       var Class_Name=["css3","html5","js","react","nodejs","sass","linkedin","heroku","github","aws"];  
       var score=document.querySelector(".game-stats__score--value");
       score.innerHTML=game.score;
      //重新开始的时候让他显示60秒 合满血状态
       time_bar.innerHTML="60s";
       time_bar.style.width="100%";
        //  把网格分成了4分 4个fr 这样子每一行有四个卡牌 网格系统 disply： grid 才能用
       game_board.setAttribute('style','grid-template-columns: 1fr 1fr 1fr 1fr;');

       //  change button name
       New_Game.innerHTML="End Game";
       var used=[];
       var usedEle;
       for(var i=0;i<16;i++){
        // 随机0到1 包括1的整数 level 1 专用要是匹配出来的是用过的元素就继续匹配
        var index=random(0,9);
        while(Class_Name[index]==usedEle){
            index=random(0,9);
        }
         //如果还剩下16-i(还剩下多少空位)=used 的长度时候触发 因为这说明后面的几个位置得全部给未匹配成功的元素
         if((16-i)==used.length){
            var used_index=random(0,(used.length-1));
            game_board.innerHTML+='<div class="card'+' '+used[used_index]+'" data-tech="'+used[used_index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
            //删除掉里面的元素啊
            used.splice(used.indexOf(used[used_index]),1);
            }else{
         //如果这里就用+=会把那个前面介绍也弄进去的
         if(i==0){
            game_board.innerHTML='<div class="card'+' '+Class_Name[index]+'" data-tech="'+Class_Name[index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
                 // 把使用过的元素放入数组
                 used.push(Class_Name[index]); 
         }else{
                game_board.innerHTML+='<div class="card'+' '+Class_Name[index]+'" data-tech="'+Class_Name[index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
            // 判断used 数组里面是否存在这个元素 不存在就-1 确保元素的唯一性
             if(used.indexOf(Class_Name[index])==-1){
                // 把使用过的元素放入数组
                used.push(Class_Name[index]);
            }else{
              // 第一个指删除元素的index 第二个指删除的数目 匹配成功后删除
              used.splice(used.indexOf(Class_Name[index]),1);
               usedEle=Class_Name[index];//level 1专用 把匹配成功的元素放在这里
           }
        } 
    } 
 }     
       flip();
       time(); 
}

// level 3
function Level3(){
    var New_Game = document.querySelector('.game-stats__button');
     var game_board = document.querySelector('.game-board');
     var time_bar= document.querySelector(".game-timer__bar");
     var Class_Name=["css3","html5","js","react","nodejs","sass","linkedin","heroku","github","aws"];  
     var score=document.querySelector(".game-stats__score--value");
     score.innerHTML=game.score;
     time_bar.innerHTML="60s";
     time_bar.style.width="100%";
     game_board.setAttribute('style','grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;');
     New_Game.innerHTML="End Game";
     var used=[];
     var usedEle;
     for(var i=0;i<36;i++){
        // 随机0到1 包括1的整数 level 1 专用要是匹配出来的是用过的元素就继续匹配
        var index=random(0,9);
        while(Class_Name[index]==usedEle){
            index=random(0,9);
        }
         //如果还剩下4-i(还剩下多少空位)=used 的长度时候触发 因为这说明后面的几个位置得全部给未匹配成功的元素
         if((36-i)==used.length){
            var used_index=random(0,(used.length-1));
            game_board.innerHTML+='<div class="card'+' '+used[used_index]+'" data-tech="'+used[used_index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
            //删除掉里面的元素啊
            used.splice(used.indexOf(used[used_index]),1);
            }else{
         //如果这里就用+=会把那个前面介绍也弄进去的
         if(i==0){
            game_board.innerHTML='<div class="card'+' '+Class_Name[index]+'" data-tech="'+Class_Name[index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
                 // 把使用过的元素放入数组
                 used.push(Class_Name[index]);
         }else{
            game_board.innerHTML+='<div class="card'+' '+Class_Name[index]+'" data-tech="'+Class_Name[index]+'"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'; 
             // 判断used 数组里面是否存在这个元素 不存在就-1 确保元素的唯一性
             if(used.indexOf(Class_Name[index])==-1){
                // 把使用过的元素放入数组
                used.push(Class_Name[index]);
            }else{
              // 第一个指删除元素的index 第二个指删除的数目 匹配成功后删除
              used.splice(used.indexOf(Class_Name[index]),1);
               usedEle=Class_Name[index];//level 1专用 把匹配成功的元素放在这里
           }
        } 
    } 
 }
        // The class of innerHTML's tag(such as card css3 ) just effect in this section so I just can use flip function in this function
       // 这个界面是点击后才会出现的 所以里面的类名也应该在这里
       flip(); 
       time(); 
     
}
function jump1(){
       var New_Game = document.querySelector('.game-stats__button');
    //    var game_board = document.querySelector('.game-board');
    //    //create a array of class name
    //    var Class_Name=["css3","html5"];   
       New_Game.addEventListener('click',level_1);
    } 
if (game.level==1){
    jump1();
    }   



// flip the card
function flip(){
    // it cannot use addEventListener this is because getElementsByClassName is a array;
    //  document.querySelector 只是针对 第一个 card 类 有作用 所以不能用
    //document.querySelectorAll('.card') is array!
    // 记录的第一张卡的index
    var score_display=document.querySelector(".game-stats__score--value");
    var Card1_Index;
    var card=[];
    var front=[];
    var card_f=[];
    front=document.querySelectorAll(".card__face--front");
    card = document.querySelectorAll('.card');
    //长度是8 单数是 card.lenght 长度是4 我们主需要背面的所以只需要单数的index
    for(var z=0;z<document.querySelectorAll('.card__face').length;z++){
        if(z%2!=0){
         card_f.push(document.querySelectorAll('.card__face')[z]);
        }
    }
    // use let i=0; this is because i will= the value card.length if we use var i=0
    // 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量 这样子就不会在addEventListener 里面的i 永远都是等于card.length 的长度了
    // var 因为会作用于循环的外部的 click 那个已经全部加好了event 也就是说我们在点击之前 for循环已经结束了 所以i 就会等于 card.length
    for(let i=0;i<card.length;i++){
         card[i].addEventListener('click',function(){
             front[i].style.transfrom="rotateY(-180deg)";
            // webkitTransform is use for Chrome 
             front[i].style.webkitTransform="rotateY(-180deg)";
             front[i].style.transitionDuration="0.5s"; 
             front[i].style.webkitTransitionDuration="0.5s";
            // 翻卡次数加1
             game.Num_Fliped_Card=game.Num_Fliped_Card+1; 
            // 把元素的class name 赋值到 object
              if(game.Num_Fliped_Card==1){
                // card_f[i].parentNode.className 父节点的class name
               // 赋值第一张卡的i(结束第一次翻卡后)
                Card1_Index=i;
                game.card1=card_f[i].parentNode.className;
            }else{
                game.card2=card_f[i].parentNode.className;
            }
            //  因为display 和 transition 不兼容 所以要让dispaly（不需要也可以） 在一定实践后执行 不然就没有翻转的动作了 1s感觉显示太慢了
             setTimeout(function(){
                // front[i].style.display="none";
           //  backfaceVisibility 这个属性是是否隐藏背面的意思 用于卡牌类游戏制作 因为在css文件中设置了hidden 所以现在要设置visible 这样就能看到背面
                card_f[i].style.backfaceVisibility="visible"
                card_f[i].style.webkitbackfaceVisibility="visible"

             },300); 
              // 判断两个卡片是否相等,不相等的话就翻面
              //判定翻牌次数是否等于二
              if(game.Num_Fliped_Card==2){
                // 归0
                game.Num_Fliped_Card=0;
                // 判断两个class name 不相等；
                if(game.card1!=game.card2){
                    //  翻回去 可以settimeon 这样子 让玩家看清楚他们是不相等的(visibility 要变成hidden)
                    // 牌1 和 牌2 翻回去
                    setTimeout(function(){
                    // 度数的问题 0度就是牌盖着的位置
                    front[i].style.transfrom="rotateY(0deg)";
                    front[Card1_Index].style.transfrom="rotateY(0deg)";  
                    front[i].style.webkitTransform="rotateY(0deg)";
                    front[Card1_Index].style.webkitTransform="rotateY(0deg)";
                    front[i].style.transitionDuration="0.5s"; 
                    front[Card1_Index].style.transitionDuration="0.5s"; 
                    front[i].style.webkitTransitionDuration="0.5s";
                    front[Card1_Index].style.webkitTransitionDuration="0.5s";
                    card_f[i].style.backfaceVisibility="hidden";
                    card_f[i].style.webkitbackfaceVisibility="hidden"
                    card_f[Card1_Index].style.backfaceVisibility="hidden";
                    card_f[Card1_Index].style.webkitbackfaceVisibility="hidden";
                },500); 
                }
                // 就是匹配成功了+2分(满分后时间停止而且过关 在 time() 方法里)
                else{
                    game.score+=2
                    score_display.innerHTML=game.score;
                }
              }
          })
        
     }     
}
function random(min,max){
    //公式;Math.floor(Math.random()*(max-min+1)+min); math.floor: 取整数部分
    return Math.floor(Math.random()*(max-min+1)+min);
}
function time(){
    // 这里面会先把所有的代码走一遍在执行 interval
    var start=document.querySelector(".game-stats__button");
    var time_bar= document.querySelector(".game-timer__bar");
    var width=100;
    // setTimeout 只会执行一次 setInterva一直执行
    var interval=setInterval(()=>{
        width-=1.7
        game.display_time-=1;
        time_bar.innerHTML=game.display_time+"s";
        time_bar.style.width=width+"%";
        // 60秒后停止 
        if(game.display_time==0){
           // 超时game over 时间回到60
            clearInterval(interval);
            // 弹框
            alert("Congratulations! your score is "+game.score);  
            game.display_time=60;
            game.score=0;
            // 无论多少关都要回到第一关
            game.level=1;
            start.innerHTML="Start Game";
            // 因为一开始整个function 是执行所有代码在执行计时 所以按钮被赋予了start.addEventListener('click',b); 
            // 所以计时结束的时候要remove 的是('click',b)而不是('click',level_1);
            start.removeEventListener('click',b);
            start.addEventListener('click',level_1);

        }else{
          if(game.level==1){
            // 分数到了4分 过关后 时间停止进入下一关
            if(game.score==4){
               clearInterval(interval);  
               game.level=2;
               game.display_time=60;
            // 因为一执行time() 这个function 其实就是已经add click b （354行）所以每次在过关之后都要把这个eventlist 清除掉
               start.removeEventListener('click',b);
               Level2();
            } 
         }else if(game.level==2){
            if(game.score==20){ 
            clearInterval(interval);  
            game.level=3;
            game.display_time=60;
            // 因为一执行time() 这个function 其实就是已经add click b（354行） 所以每次在过关之后都要把这个eventlist 清除掉
            start.removeEventListener('click',b);
            Level3();
            }
          }else if(game.level==3){
              if(game.score==56){
                clearInterval(interval);
                alert("congratulation!! you win");
              }
          }
        }
  },1000)

    //  为了方便 remove 因为 removeeventlistener 不能用整个函数
       var b=function(){
         Back(interval,start); 
         start.removeEventListener('click',b); 
        // 全部都需要从第一关开始
         start.addEventListener('click',level_1);  
        }
        // 随时停止 
            start.removeEventListener('click',level_1);
         // 这个东西会马上触发的 要是 直接（）=》{} 这样子就不会
            // start.addEventListener('click',Back(interval,start));  
            // 这样就没事了 正常了
            start.addEventListener('click',b); 
         // 这个不能放下面 因为代码一开始就会被执行 所以就会add 了之后 马上remove了 所以只能放在function 里面
            // start.removeEventListener('click',b);
          
        
}

function Back(interval,start){
    clearInterval(interval);
    alert("Congratulations! your score is "+game.score); 
    game.display_time=60;
    game.score=0;
    game.level=1;
    start.innerHTML="Start Game";
}
// 第二关为何随时停止时候还会出现两次弹窗 back function 的弹窗