var isdark = false;
function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ["android", "iphone", "ipad", "ipod", "windows phone"];

  for (const keyword of mobileKeywords) {
    if (userAgent.includes(keyword)) {
      return true;
    }
  }

  return false;
}

function convertToSingleDecimal(inputString) {
    // 将字符串转换为浮点数
    const floatValue = parseFloat(inputString);

    // 如果转换成功且不是 NaN
    if (!isNaN(floatValue)) {
        // 使用 toFixed 将浮点数转换为只保留一位小数的字符串
        const roundedValue = floatValue.toFixed(1);
        return roundedValue;
    } else {
        // 转换失败，返回原始输入
        return inputString;
    }
}
function calculateReciprocalFromPercentage(percentageString) {
    var percentageValue = parseFloat(percentageString) / 100;
    var reciprocalValue = 1 / percentageValue;
    return reciprocalValue;
}

function generateRandomIndex(max) {
    const randomBytes = new Uint32Array(1);
    window.crypto.getRandomValues(randomBytes);
    const randomNumber = randomBytes[0];
    return randomNumber % max;
}
function swichtheme() {
    if (isdark) { light() } else { dark() }
}
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = `::-webkit-scrollbar-thumb {
    background: rgb(82, 82, 82); 
    }`;
function dark(c=-1) {
    document.getElementById("back").innerHTML = "";

    const themes = [
        {
            elem:`<img src="pic/7.png" style="max-width: 80%;max-height: 80%;bottom: 0;right:0;position: absolute;"/>`,
            bgColor: "rgb(1,2,24)",
            code:``,
        },
        {
            elem:`<img src="pic/dark1.jpg" style="height: 100%; right: 0; position: absolute;"/>`,
            bgColor: "rgb(46, 61, 59)",
            code:``,
        },
        {
            elem:`<canvas id="rain" style="height: 100%; width: 100%; position: absolute;"></canvas>`,
            bgColor: "rgb(59, 59, 59)",
            code:`
            var ww=window.innerWidth || document.documentElement.clientWidth;
            var hh=window.screen.availHeight * window.devicePixelRatio;
             var mouseX ;
             var mouseY ;
             document.addEventListener('mousemove', (event) => {
             mouseX = event.clientX; // 鼠标在视口中的水平位置
              mouseY = event.clientY; // 鼠标在视口中的垂直位置
           
           });
           
               var canvas = document.getElementById("rain");
           var ctx = canvas.getContext('2d');
           canvas.width =ww;
                       canvas.height = hh;
           var w = ww;
           var h = hh;
           ctx.strokeStyle ='rgba(174,194,224,0.5)';
           ctx.lineWidth = 1;
           ctx.lineCap = 'round';
           
           var init = [];
           var maxParts = 1000;
           for (var a = 0; a < maxParts; a++) {
             init.push({
               x: Math.random() * w,
               y: Math.random() * h,
               l: Math.random() * 1,
               xs: -2 + Math.random() * 2 + 1,
               ys: Math.random() * 20+20
             })
           }
           
           var particles = [];
           for (var b = 0; b < maxParts; b++) {
             particles[b] = init[b];
           }
           
           function draw() {
             ctx.clearRect(0, 0, w, h);
             for (var c = 0; c < particles.length; c++) {
               var p = particles[c];
               ctx.beginPath();
               ctx.moveTo(p.x, p.y);
               ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
               ctx.stroke();
             }
             move();
             requestAnimationFrame(draw);
           }
           
           function move() {
             for (var b = 0; b < particles.length; b++) {
               var p = particles[b];
               p.x += p.xs/5;
           if (p.x<mouseX){
             p.x +=0.2;
           }else{
             p.x -=0.2;
           }
               p.y += p.ys/10;
               if (p.x > w || p.y > h) {
                 p.x = Math.random() * w;
                 p.y = -20;
               }
             }
           }
           
           requestAnimationFrame(draw);
            `,
        },
        {
            elem:`<canvas id="snow" style="height: 100%; width: 100%; position: absolute;"></canvas>`,
            bgColor: "rgb(13, 17, 23)",
            code:`
       var canvas = document.getElementById("snow");
        var ctx = canvas.getContext("2d");
        /* 定义x为窗口宽度，y为窗口高度 */
        var x = 0 ,y=0;      
        /* 定义数组，是为了存储每一片雪与雪花的信息 */
        var arr=[];
        /* 假设有600片雪 */
        var num=1000;
          
    /* 绑定窗口大小发生改变事件，让canvas随时铺满浏览器可视区 */
      window.onresize=resizeCanvas;
        function resizeCanvas(){
            x=canvas.width=window.innerWidth;
            y=canvas.height=window.innerHeight;
        }
        resizeCanvas(); 

        for(let i=0;i<num;i++){
            arr.push({
                x: x*Math.random(),
                y: y*Math.random(),
                r: Math.random()*5,
                color:'rgba(255, 255, 255, ' + Math.random() + ')'
            })
        }
        /* 创建image元素 */

        function draw(){
            /* 遍历数组 */
            for(let i=0;i<num;i++){
                var yuan = arr[i];     
                /* 创建路径 */          
                 ctx.beginPath();
                 /* 给雪设置颜色 */
                 ctx.fillStyle = yuan.color;
                 /* 绘制雪 */
                ctx.arc(yuan.x,yuan.y,yuan.r,0,2*3.14,false);        
                /* 填充路径 */
                ctx.fill();
            }
        }
          
        function updated() {
            for(let i=0;i<num;i++){
                var yuan = arr[i];
                /* x轴位置+0.1，变化小点 */
                yuan.x = yuan.x + 0.1; 
                /* y轴位置+自身半径一半，这样越大的学走越快 */
                yuan.y = yuan.y+yuan.r/2;
                /* 如果学已经走出窗口 */
                if(yuan.y>y){
                    /* 重新给雪数组赋值 */
                   arr[i]={ x: x*Math.random(),
                    y: -10,
                    r: Math.random()*5,
                    color:'rgba(255, 255, 255, ' + Math.random() + ')'
                    }
                }
            }
        }
        function start() {
            /* 清屏 */
            ctx.clearRect(0,0,x,y);
            /* 绘制 */
            draw();
            /* 更新 */
            updated(); 
            requestAnimationFrame(start);
        }
        requestAnimationFrame(start);
      
            `,
        },
    ];

    let randomIndex;
    if (c==-1){
        randomIndex = generateRandomIndex(themes.length);
    }else{
        randomIndex = c;
    }
    const selectedTheme = themes[randomIndex];

    document.getElementById("back").innerHTML += selectedTheme.elem;
    document.documentElement.style.backgroundColor = selectedTheme.bgColor;

    var codeFunction = new Function(selectedTheme.code);
    codeFunction();

    themeStylesheet.href = 'css/github-dark.min.css';

    isdark = true;
    document.documentElement.style.color = "white";

    style.innerHTML = `::-webkit-scrollbar-thumb {
        background: rgb(255, 255, 255); 
        }`;
}

function light() {
    document.getElementById("back").innerHTML = "";

    const themes = [
        {
            imgUrl: "pic/bgpic.jpg",
            bgColor: "#FFF",
            imgStyle: "height: 100%; right: 0; position: absolute;"
        },
        {
            imgUrl: "pic/light1.jpg",
            bgColor: "rgb(239, 239, 226)",
            imgStyle: "height: 100%; right: 0; position: absolute;"
        },
        // 添加更多主题
        // {
        //     imgUrl: "pic/another-theme.jpg",
        //     bgColor: "rgb(255, 0, 0)",
        //     imgStyle: "height: 100%; left: 0; top: 0; position: absolute;"
        // },
        // ...
    ];
    const randomIndex = generateRandomIndex(themes.length);
    const selectedTheme = themes[randomIndex];

    document.getElementById("back").innerHTML += `<img src="${selectedTheme.imgUrl}" style="${selectedTheme.imgStyle}"/>`;
    document.documentElement.style.backgroundColor = selectedTheme.bgColor;


    themeStylesheet.href = 'css/github.min.css';

    isdark = false;
    document.documentElement.style.color = "black";


    style.innerHTML = `::-webkit-scrollbar-thumb {
    background: rgb(82, 82, 82); 
    }`;
}


function hello() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour >= 6 && hour < 12) {
        greeting = "早上好";
    } else if (hour >= 12 && hour < 14) {
        greeting = "中午好";
    } else if (hour >= 14 && hour < 18) {
        greeting = "下午好";
    } else if (hour >= 18 && hour < 22) {
        greeting = "晚上好";
    } else {
        greeting = "夜深了，注意休息";
    }
    document.getElementsByTagName("head")[0].appendChild(style);
    return greeting;
}
function reset() {
    mess.style.height = "auto"; // 先重置高度
    let max = document.getElementById("main_container").offsetHeight / 2;
    if (mess.scrollHeight > max) {
        mess.style.height = max + "px"; // 设置为内容的高度
    } else {
        mess.style.height = mess.scrollHeight + "px"; // 设置为内容的高度
    }
}
function setconfig(a, b, c = "") {

    cid = a;
    model = b;
    pid = c;

        document.getElementById("mainTab").setAttribute('cid', cid);


    // console.log(`id:${cid},model:${model}`);
}

function generateRandomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
function my1(v = "",dom) {

    dom.innerHTML = "正在加载聊天记录";
    fetch(server+"direct1.php?his=" + v) // 更改为你的PHP脚本的URL
        .then((response) => response.json())
        .then((jsonObj) => {

            // console.log(`${jsonObj.content}`);
            var arr = jsonObj.content.split("@#!@");
            if (jsonObj.add3 == getc("userid")) {
                document.getElementById("footer").style.display = "flex";
            } else {
                console.log(jsonObj.add3);
                document.getElementById("footer").style.display = "none";
            }

            let flag = 0;
            dom.innerHTML = "";
            arr.forEach(function (item) {
                if (item.includes("jj")) {
                    item="该消息包含违规内容";
                }

                if (flag == 0) {
                    addmessage("right", item, true, isqipao,false,"",dom);
                    flag = 1;
                } else {
                    flag = 0;
                    let replacedString = item;
                    

                    const str = replacedString;

                    // 检查字符串是否包含附加信息
                    const hasExtra = str.endsWith('#\*}\]}')
                    let pid = ""
                    // 如果包含附加信息
                    if (hasExtra) {

                        // 提取附加信息
                        const start = str.lastIndexOf('{\[{\*#')
                        const end = str.lastIndexOf('#\*}\]}')
                        const extra = str.substring(start + 5, end);

                        // 去除附加信息得到纯字符串
                        replacedString = str.slice(0, start)
                        const splitted = extra.split('@');
                        pid = splitted[1]

                    }
                    setconfig(jsonObj.id, jsonObj.model);


                    replacedString = mark(replacedString);
                    addmessage("left", replacedString, false, isqipao, false, pid,dom);


                }
            });
            hljs.highlightAll();
            copy();

        })
        .catch(()=>{
            dom.innerHTML = "加载失败";
        });
}

function showContextMenu(event, param1) {

    event.preventDefault();

    function getTargetParent(target, classx = '.markdown-body') {

        let parent = target;
        try {
            while (parent) {
                if (parent.matches(classx)) {
                    return parent;
                }
                parent = parent.parentNode;
            }
        } catch (error) {
            return target; // 在捕获到异常时执行的代码块
        }


        // 没找到,返回目标本身


    }
    const contextMenu = document.querySelector(".context-menu");
    if (contextMenu) {
        contextMenu.remove();
    }

    const x = event.clientX;
    const y = event.clientY;

    const newContextMenu = document.createElement("div");
    newContextMenu.classList.add("context-menu");
    newContextMenu.style.top = y + "px";
    newContextMenu.style.left = x + "px";

    var selectedText = window.getSelection().toString();

    if (selectedText !== "") {
        const copyOption = document.createElement("button");
        copyOption.innerText = "复制";
        copyOption.classList.add("context-menu-option");
        copyOption.addEventListener('click', (event) => {
            // 获取当前的选择范围

            // 执行复制命令
            document.execCommand('foreColor', false, 'auto');
            document.execCommand('copy');
            window.getSelection().empty();
            // 恢复选择范围并设置焦点

            // copyH5Content(selectedText);
            newContextMenu.remove();
        }); newContextMenu.appendChild(copyOption);


        const copyOptionx = document.createElement("button");
        copyOptionx.innerText = "复制(不带word格式)";
        copyOptionx.classList.add("context-menu-option");
        copyOptionx.addEventListener('click', (event) => {
            var selectedText = window.getSelection().toString();

            copyH5Content(selectedText);
            newContextMenu.remove();
        }); newContextMenu.appendChild(copyOptionx);

        const tiwen = document.createElement("button");
        tiwen.innerText = "重新提问";
        tiwen.classList.add("context-menu-option");
        tiwen.addEventListener('click', (event) => {
            var selectedText = window.getSelection().toString();
mess.value=selectedText;
            newContextMenu.remove();
        }); newContextMenu.appendChild(tiwen);
    }











    const copyAll = document.createElement("div");
    copyAll.innerText = "复制全部";
    copyAll.classList.add("context-menu-option");
    copyAll.addEventListener("click", () => {
        // 获取要选中内容的div元素
        const divx = getTargetParent(event.target);

        divx.style.fontSize = "14px";
        copyDOM(divx);
        requestAnimationFrame(() => {
            divx.style.fontSize = "inherit";
        });

        //copyH5Content(getTargetParent(event.target).innerText);

        newContextMenu.remove();
    }); newContextMenu.appendChild(copyAll);

    const copyAllx = document.createElement("div");
    copyAllx.innerText = "复制全部(不带word格式)";
    copyAllx.classList.add("context-menu-option");
    copyAllx.addEventListener("click", () => {
        // 获取要选中内容的div元素
        //copyDOM(getTargetParent(event.target));
        copyH5Content(getTargetParent(event.target).innerText);

        newContextMenu.remove();
    }); newContextMenu.appendChild(copyAllx);

    // 检查属性是否存在
    const targetParent = getTargetParent(event.target);
    const customDivId = targetParent.getAttribute("pid");

    if (customDivId != "") {
        const startHereOption = document.createElement("div");
        startHereOption.innerText = "回复AI的这条消息";
        startHereOption.classList.add("context-menu-option");
        startHereOption.addEventListener("click", () => {

            // 获取要删除的 DOM 元素
            var dom = getTargetParent(event.target, ".mex");
            dom.style.opacity = 1;
            let preSiblings = dom.previousElementSibling;
            while (preSiblings) {
                preSiblings.style.opacity = 1;
                preSiblings = preSiblings.previousElementSibling;
            }

            let nextSiblings = dom.nextElementSibling;
            while (nextSiblings) {
                nextSiblings.style.opacity = 0.3;
                nextSiblings = nextSiblings.nextElementSibling;
            }



            pid = customDivId;
            newContextMenu.remove();
        }); newContextMenu.appendChild(startHereOption);
    }





    document.body.appendChild(newContextMenu);

    document.addEventListener("click", () => {
        if (newContextMenu) {
            newContextMenu.remove();
        }
    });
    document.addEventListener("wheel", () => {
        if (newContextMenu) {
            newContextMenu.remove();
        }
    });
}
function addchat(user, t, type = true, type1 = true, prep = false) {
    addx(user, t, type, type1, prep, "", document.getElementById("chatmain"));
}
/**
 * 向消息中添加内容
 * @param {string} user - 用户信息
 * @param {string} t - 消息内容
 * @param {boolean} type - 是否不解释为HTML
 * @param {boolean} type1 - 气泡
 * @param {boolean} prep - 是否是即将要填充内容的prep
 * @param {string} pid - 消息pid
 * @param {HTMLElement|null} insert - 要填充内容的元素，如果为null，则填充到主要元素(main)
 */
function addmessage(user, t, type = true, type1 = true, prep = false, pid = "", insert = null) {
    // 第一个，左右
    // 第二个内容
    // 第三个是否解释html
    // 第四个气泡
    // 第五个，是否是即将要填内容的prep
    // 第六个 消息pid
    // 第七个，填到哪
    if (insert) {
        addx(user, t, type, type1, prep, pid, insert);
    } else {
        addx(user, t, type, type1, prep, pid, main);
    }
}

function addx(user, t, type = true, type1 = true, prep = false, pid = "", ojb) {

    var newMessage = document.createElement("div");


    if (type1) {
        if (user == "right") {
            user = "me";
        }
        if (user == "left") {
            user = "you";
        }


        newMessage.classList.add("message");
        newMessage.classList.add("mex");
        if (user == "vip") {
            newMessage.classList.add("you");
            newMessage.classList.add("vip");
        } else {
            newMessage.classList.add(user);
            //newMessage.classList.add("markdown-body");
        }


        var contentdiv = document.createElement("div");

        if (type) {
            contentdiv.textContent = t;
        } else {
            contentdiv.innerHTML = t;
            contentdiv.classList.add("markdown-body");
                    renderMathInElement(contentdiv, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true},
            ],
            // • rendering keys, e.g.:
            throwOnError : false
        });
        }
        if (prep) {
            contentdiv.id = "prep";
        }

        newMessage.appendChild(contentdiv);
        contentdiv.addEventListener("contextmenu", function (event) {
            if (!isMobile()){showContextMenu(event, pid != "");}
            
        });
        contentdiv.setAttribute("pid", pid);
        contentdiv.addEventListener("contextmenu", showContextMenu);
        ojb.appendChild(newMessage);
    }






    else {
        if (user == "right") {
            user = "user";
        }
        if (user == "left") {
            user = "ans";
        }

        newMessage.classList.add("mex");
        newMessage.classList.add("defx");
        newMessage.classList.add(user);
        if (type) {
            newMessage.textContent = t;
        } else {
            newMessage.innerHTML = t;
                        newMessage.classList.add("markdown-body");
                    renderMathInElement(newMessage, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true},
            ],
            // • rendering keys, e.g.:
            throwOnError : false
        });
            newMessage.classList.add("markdown-body");
        }
        if (prep) {
            newMessage.id = "prep";
        }
        newMessage.setAttribute("pid", pid);
        newMessage.addEventListener("contextmenu", function (event) {
            if (!isMobile()){showContextMenu(event, pid != "");}
        });
        ojb.appendChild(newMessage);
    }




}


function gettip() {
    document.getElementById("tip1").innerHTML = hello();
    fetch(server+"direct.php?tip=1")
        .then((response) => response.text())
        .then((data) => {
            if (data != "!") {
                document.getElementById("tip2").innerHTML = data;
            } else {
                document.getElementById("tip2").innerHTML = "";
            }
        });


        fetch("notice/notice.json")
        .then((response) => response.json())
        .then((data) => {
            
            document.getElementById("tip3").innerHTML = "重要通知:" + data.tip2;
            if (data.tip2_id != getc("vvv") && getc("vvv") != "") {

                alert("重要通知:\n" + data.tip2);
            }
            setc("vvv", data.tip2_id);
        });


}


function sendx(a) {
    if (a.includes("null")) {
        return;
    }
    if (a) {
        fetch(server+a);
    }
}


function sendz(a, div, url) {
    let buff = "";
  let socket;
  socket = new WebSocket(url);
    // if (window.location.protocol === 'http:') {
    //   socket = new WebSocket(url);
    // }else{
    //   addmessage("left", `<p>当前为https，无法正常使用，请修改浏览器地址栏为http，把s去掉。</p>`, false, true);
    // }
    
    var empty = true;
    var nofinish = true;
    function update(c) {
        div.innerHTML = c;
        function hasDirectText(element) {

if (element === null) {
 return true;
}





          
let children = element.childNodes;

for (let i = 0; i < children.length; i++) {

  if (children[i].nodeType === Node.TEXT_NODE) {

    // 增加正则表达式,过滤空白字符
    if(/^\s*$/.test(children[i].nodeValue)) { 
      continue;
    }

    return true;

  }

}

return false;

}
        // 获取最后一个子DOM元素
        let lastChildDOM = div;
        
         while (!hasDirectText(lastChildDOM)) {
           if (lastChildDOM.lastElementChild !== null) {
lastChildDOM = lastChildDOM.lastElementChild;
}else{
             break;
}
            
}


        
        // 创建一个新的span元素
        let spanElement = document.createElement("span");
        spanElement.className = "qblinking";
        spanElement.innerHTML = "⬤";

        // 将span元素添加到最后一个子DOM元素的innerText之后
        lastChildDOM.appendChild(spanElement);
        // first, find all the div.code blocks
        if (cango) {

            requestAnimationFrame(function () {
                document.getElementById('main').scrollTop = document.getElementById('main').scrollHeight;
            });
        }
        document.querySelectorAll('#prep pre code').forEach(el => {
            // then highlight each
            hljs.highlightElement(el); 
        });
        renderMathInElement(div, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true},
            ],
            // • rendering keys, e.g.:
            throwOnError : false
        });

    }
  var close_exec=false;
    function close() {
        // console.log(`发生错误`);
if (close_exec){
  return;
}close_exec=true;
        submit_btn.style.display = "block";
        mess.readOnly = false;
        socket.close();
        if (empty) {
            addmessage("left", "网络连接失败，这大概率是你的问题，可以试着换个网或者切换服务器", false, false);
            document.getElementById('main_container').scrollTop = document.getElementById('main_container').scrollHeight;
            fetch(server+'direct1.php?reset');
        }
        if (nofinish && !empty) {
            addmessage("left", "作答被未知原因打断，重试一下", false, false);
            document.getElementById('main_container').scrollTop = document.getElementById('main_container').scrollHeight;
            fetch(server+'direct1.php?reset');
        }
        console.log("%c 作答完成", " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em")
        const elementsToRemove = document.querySelectorAll('.qblinking');

        // 删除所有符合条件的元素
        elementsToRemove.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }
    socket.onopen = function (event) {
        socket.send(a);
    };
    socket.onmessage = function (event) {
        empty = false;

        try {
            var jsonObj = JSON.parse(event.data);

            if (jsonObj.error === undefined) {
                throw new Error("jsonObj.error is undefined");
            }
var text = jsonObj.message;
            if (jsonObj.error == "0") {
                
                if (text != "") {
                    buff = buff + text;
                    let replacedString = buff;
                    update(mark(replacedString));

                }
                if (jsonObj.end_turn) {
                    div.setAttribute("pid", jsonObj.parent_id);
                    setconfig(jsonObj.conversation_id, jsonObj.model);
                    copy();
                    nofinish = false;
                }
            }
            if (jsonObj.error == "5") {
                console.warn(text);
              if(text=="作答完成"){
                close();
              }
            }
            if (jsonObj.error == "1") {
              
                div.innerHTML = text;
                document.getElementById('main_container').scrollTop = document.getElementById('main_container').scrollHeight;
            }
        } catch (error) {
            if (event.data != "") {


    buff += event.data;

              
              
                let replacedString = buff;
                replacedString = mark(replacedString);

                update(replacedString);


                mess.value = "";
                reset();

            }
        }
    };
    socket.onclose = function (event) {
        console.log("Connection closed:", event);
        close();
    };

    socket.onerror = function (event) {
        console.error("WebSocket Error:", event);
    };
}

function copy() {

    // 获取所有具有 'clickable-div' 类的 div 元素
    const clickableDivs = document.querySelectorAll('pre > code');

    // 遍历每个可点击的 div 元素，检查是否已经有双击事件监听器，没有则添加
    clickableDivs.forEach(div => {
        if (!div.hasAttribute('data-doubleclick-added')) {



var copyButton = document.createElement("button");
copyButton.className = "copy_code";

          


// 获取元素的所有类名
var classNames = div.className.split(" ");

// 查找第一个以"language-"开头的类名
var languageClass = classNames.find(function(className) {
    return className.startsWith("language-");
});

// 输出或使用找到的类名
if (languageClass) {
  copyButton.textContent = "复制"+languageClass.replace(/^language-/g, '')+"代码";
}







          
copyButton.addEventListener("click", function() {
copyDOM(div);
  const audio = new Audio('ok.mp3');
  audio.play();
  // 这里可以添加处理复制按钮点击事件的代码
});
var editButton = document.createElement("button");
editButton.className = "edit_code";
editButton.textContent = "编辑代码";
editButton.addEventListener("click", function() {
  window.open("https://vscode.dev/", '_blank');
  // 这里可以添加处理编辑按钮点击事件的代码
});
var divContainer = document.createElement("div");
divContainer.className = "code_copy";
divContainer.appendChild(copyButton);
divContainer.appendChild(editButton);

// 添加点击事件

if (div.parentNode) {
    div.parentNode.insertBefore(divContainer, div);
  } 







          
            //dragMoveX(div);

            div.setAttribute('data-doubleclick-added', 'true');
        }
    });
}
// 创建 websocket 连接

function setc(a, b) {
    var expirationDate = new Date();
    expirationDate.setTime(
        expirationDate.getTime() + 10 * 365 * 24 * 60 * 60 * 1000
    );
    document.cookie =
        `${a}=${b};expires=` + expirationDate.toUTCString() + ";path=/";
}
function getc(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
function getIP() {
    return fetch(server+"getip.php")
        .then(response => response.text())
        .then(data => data);
}
function removeElementByClassName(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
}

function checkForElement() {
    var targetClassName = "wv-lt-col-5";
    removeElementByClassName(targetClassName);
}
document.addEventListener('DOMContentLoaded', function () {
fetch(server + "direct1.php?ip")
  .then((response) => response.text())
  .then((data) => {

      return fetch(server + "direct1.php?geo=" + data);

  })
  .then((response) => response.json())
  .then((data) => {
    let geoid = data.location[0].id;
    WIDGET.CONFIG.city="CN"+geoid;
      // 创建一个 script 元素
      var scriptElement = document.createElement('script');

      // 设置 script 元素的 src 属性
      scriptElement.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";

      // 将 script 元素添加到文档的头部或其他合适的位置
      document.head.appendChild(scriptElement);
     setInterval(checkForElement, 1000);
    return fetch(server + "direct1.php?weather=" + geoid);
  })
  .then((response) => response.json())
  .then((data) => {
    const table = document.getElementById('weatherTable');
    for (let daily of data.daily) {
      let row = table.insertRow(-1);
      row.insertCell(-1).innerText = daily.fxDate;
      row.insertCell(-1).innerText = `${daily.tempMax}℃~${daily.tempMin}℃`;
      row.insertCell(-1).innerText = `${daily.textDay}转${daily.textNight}`;
    }
  })
  .catch((error) => {
    console.error("发生错误:", error);
  });
});

function copyH5Content(content) {
    navigator.clipboard.writeText(content);
}
function copyDOM(div, clear = true) {

    const selection = window.getSelection();
    // 创建range
    const range = document.createRange();

    // 设置range的开始位置到div的开始位置
    range.setStart(div, 0);

    // 设置range结束位置到div末尾
    range.setEnd(div, div.childNodes.length);

    // 获取选择对象


    // 清除当前任何选择
    selection.removeAllRanges();

    // 添加这个range到选择区
    selection.addRange(range);
    document.execCommand('copy');
    if (clear) {
        selection.removeAllRanges();
    }

}

// 解析LRC歌词文本
function parseLRC(data, timeOffset) {
    console.log("解析歌词",data)
    const lines = data.split('\n');
    const lyrics = [];
    for (const line of lines) {
        const match = line.match(/\[(\d{2}):(\d{2}(?:\.\d{1,3})?)\](.+)/);
        if (match) {
            const time = (parseInt(match[1]) * 60 + parseFloat(match[2])) + timeOffset;
            const text = match[3];
            lyrics.push({ time, text });
        }
    }
    return lyrics;
}
function dragMoveX(container) {
    var flag;
    var downX;
    var scrollLeft;

    function handleMouseDown(event) {
        if (event.target === container && hasHorizontalScrollbar(container)) {
            flag = true;
            
            container.classList.add("no_copy");
            downX = event.clientX;
            scrollLeft = container.scrollLeft;
        }
  
    }

    function handleMouseMove(event) {

        if (flag) {
            var moveX = event.clientX;
            var scrollX = moveX - downX;
            window.getSelection().removeAllRanges();
            if (scrollX < 0 && scrollLeft > 0) {
                container.scrollLeft = scrollLeft - scrollX;
            } else {
                container.scrollLeft = scrollLeft - scrollX;
            }
        }
    }

    function handleMouseUp() {
        container.classList.remove("no_copy");
        flag = false;
    }



    container.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  
}function hasHorizontalScrollbar(element) {
    return element.scrollWidth > element.clientWidth;
  }

  function mark(c){
        let text=c;
        if (text.includes('\\[') && text.includes('\\]')) {
            text = text.replace(/\\\[/g, '\\\\\[');
            text = text.replace(/\\\]/g, '\\\\\]');
        }
        if (text.includes('\\(') && text.includes('\\)')) {
            text = text.replace(/\\\(/g, '\\\\\(');
            text = text.replace(/\\\)/g, '\\\\\)');
        }
      text=text.replace(/```vue/g, "```html");
    
    return marked.parse(text);
  }

