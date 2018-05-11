var mensOutwear=[]
var ladiesOutwear=[]
var mensTshirt=[]
var ladiesTshirt=[]

function loadJSON()
{
    var xobj=new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET',"data.json",true);
    
    xobj.onreadystatechange=function(){
        
        if(xobj.readyState==4 && xobj.status==200)
        {
            var opInJson=JSON.parse(xobj.responseText);
            for(var i=0;i<opInJson.length;i++)
            {
                if(opInJson[i]['category']=='mens_hoodies')
                {
                    mensOutwear.push(opInJson[i]);
                }
                else if(opInJson[i]['category']=='ladies_hoodies')
                {
                    ladiesOutwear.push(opInJson[i]);
                }
                else if(opInJson[i]['category']=='mens_tshirt')
                {
                    mensTshirt.push(opInJson[i]);
                }
                else if(opInJson[i]['category']=='ladies_tshirt')
                {
                    ladiesTshirt.push(opInJson[i]);
                }
            }
        }
    }
    xobj.send(null);
}

loadJSON();

var mainPageSection;
var mensOutwearSection;
var ladiesOutwearSection;
var mensTshirtSection;
var ladiesTshirtSection;



function sectionSelected(e)
{
    e.preventDefault();
    var clickedElement=e.target;
    if(clickedElement.id=="homeClick")
    {
        mainPageSection.className='';
        mensOutwearSection.className="hidden";
        ladiesOutwearSection.className="hidden";
        mensTshirtSection.className="hidden";
        ladiesTshirtSection.className="hidden";
    }
    else if(clickedElement.id=="mensOutwearClick")
    {
        mainPageSection.className='hidden';
        mensOutwearSection.className="";
        ladiesOutwearSection.className="hidden";
        mensTshirtSection.className="hidden";
        ladiesTshirtSection.className="hidden";
    }
    else if(clickedElement.id=="ladiesOutwearClick")
    {
        mainPageSection.className='hidden';
        mensOutwearSection.className="hidden";
        ladiesOutwearSection.className="";
        mensTshirtSection.className="hidden";
        ladiesTshirtSection.className="hidden";
    }
    else if(clickedElement.id=="mensTshirtsClick")
    {
        mainPageSection.className='hidden';
        mensOutwearSection.className="hidden";
        ladiesOutwearSection.className="hidden";
        mensTshirtSection.className="";
        ladiesTshirtSection.className="hidden";
    }
    else if(clickedElement.id=="ladiesTshirtsClick")
    {
        mainPageSection.className='hidden';
        mensOutwearSection.className="hidden";
        ladiesOutwearSection.className="hidden";
        mensTshirtSection.className="hidden";
        ladiesTshirtSection.className="";
    }
    
}


function loadAtStart()
{
    mainPageSection=document.getElementById('mainBody');
    mensOutwearSection=document.getElementById('mensOutwearBody');
    ladiesOutwearSection=document.getElementById('ladiesOutwearBody');
    mensTshirtSection=document.getElementById('mensTshirtBody');
    ladiesTshirtSection=document.getElementById('ladiesTshirtBody');

    AddTemplate();
}

function AddTemplate()
{
    //for male outwear
    var container=document.getElementById('mensOuterContainer');
    
    document.getElementById('menOuterCount').innerText=mensOutwear.length.toString();
    for(var i=0;i<mensOutwear.length;i++)
    {
        var tempContainer=document.createElement('div');
        var image=document.createElement('img');
        image.src=mensOutwear[i]['image'];

        var name=document.createElement('span');
        name.innerText=mensOutwear[i]['name'];
        var price=document.createElement('span');
        price.innerText=mensOutwear[i]['price'];

        tempContainer.appendChild(image);
        tempContainer.appendChild(name);
        tempContainer.appendChild(price);
        container.appendChild(tempContainer);
        
    }

    //for ladies outwear
    var container=document.getElementById('ladiesOuterContainer');
    document.getElementById('ladiesOuterCount').innerText=ladiesOutwear.length;
    for(var i=0;i<ladiesOutwear.length;i++)
    {
        var tempContainer=document.createElement('div');
        var image=document.createElement('img');
        image.src=mensOutwear[i]['image'];

        var name=document.createElement('span');
        name.innerText=mensOutwear[i]['name'];
        var price=document.createElement('span');
        price.innerText=mensOutwear[i]['price'];
        tempContainer.appendChild(image);
        tempContainer.appendChild(name);
        tempContainer.appendChild(price);
        container.appendChild(tempContainer);
        
    }

    //for mens tshirt
    var container=document.getElementById('mensTshirtContainer');
    document.getElementById('mensTshirtCount').innerText=mensTshirt.length;
    for(var i=0;i<mensTshirt.length;i++)
    {
        var tempContainer=document.createElement('div');
        var image=document.createElement('img');
        image.src=mensOutwear[i]['image'];

        var name=document.createElement('span');
        name.innerText=mensOutwear[i]['name'];
        var price=document.createElement('span');
        price.innerText=mensOutwear[i]['price'];
        tempContainer.appendChild(image);
        tempContainer.appendChild(name);
        tempContainer.appendChild(price);
        container.appendChild(tempContainer);
        
    }

    //for ladies tshirt
    var container=document.getElementById('ladiesTshirtContainer');
   document.getElementById('ladiesTshirtCount').innerText=ladiesTshirt.length;
    for(var i=0;i<ladiesTshirt.length;i++)
    {
        var tempContainer=document.createElement('div');
        var image=document.createElement('img');
        image.src=mensOutwear[i]['image'];

        var name=document.createElement('span');
        name.innerText=mensOutwear[i]['name'];
        var price=document.createElement('span');
        price.innerText=mensOutwear[i]['price'];
        tempContainer.appendChild(image);
        tempContainer.appendChild(name);
        tempContainer.appendChild(price);
        container.appendChild(tempContainer);
        
    }
}