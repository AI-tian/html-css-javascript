var ohotbtn=document.getElementsByClassName("hotbtn"),
	ohotshuff=document.querySelectorAll(".hot-shuff li"),
	ohotshuffbox=document.getElementsByClassName("hot-shuff"),
	ohottab=document.getElementsByClassName("hottab"),
	b=0;
	c=3;
	d=7;
	e=11;
	console.log(ohottab)
	ohotshuffbox[0].onmouseover=function(){
		ohotbtn[0].style.cssText="display:block"
		ohotbtn[1].style.cssText="display:block"
	}
	ohotshuffbox[0].onmouseout=function(){
		ohotbtn[0].style.cssText="display:none"
		ohotbtn[1].style.cssText="display:none"
	}
	ohotbtn[0].onmouseover=function(){
		ohotbtn[0].style.cssText="display:block"
		ohotbtn[1].style.cssText="display:block"
	}
	ohotbtn[1].onmouseover=function(){
		ohotbtn[0].style.cssText="display:block"
		ohotbtn[1].style.cssText="display:block"
	}
	ohotbtn[1].onclick=function(){
		ohotshuff[num].className="hot-marginL";
		ohottab[b].className="hottab";
		b++;
		if(b >=2){
			b=2;
		}
		ohotshuff[b-1].className="hot-marginL";
		ohotshuff[2].className="";
		ohottab[b].className="hottab h-tab";
	}
	ohotbtn[0].onclick=function(){
		ohottab[b].className="hottab";
		b--;
		if(b <=0){
			b=0;
		}
		ohotshuff[b].className="";
		ohottab[b].className="hottab h-tab";
	}

	ohotshuffbox[1].onmouseover=function(){
		ohotbtn[2].style.cssText="display:block"
		ohotbtn[3].style.cssText="display:block"
	}
	ohotshuffbox[1].onmouseout=function(){
		ohotbtn[2].style.cssText="display:none"
		ohotbtn[3].style.cssText="display:none"
	}
	ohotbtn[2].onmouseover=function(){
		ohotbtn[2].style.cssText="display:block"
		ohotbtn[3].style.cssText="display:block"
	}
	ohotbtn[3].onmouseover=function(){
		ohotbtn[2].style.cssText="display:block"
		ohotbtn[3].style.cssText="display:block"
	}
	ohotbtn[3].onclick=function(){
		ohotshuff[c].className="hot-marginL";
		ohottab[c].className="hottab";
		c++;
		if(c >=6){
			c=6;
		}
		ohotshuff[c-1].className="hot-marginL";
		ohotshuff[6].className="";
		ohottab[c].className="hottab h-tab";
	}
	ohotbtn[2].onclick=function(){
		ohottab[c].className="hottab";
		c--;
		if(c <=3){
			c=3;
		}
		ohotshuff[c].className="";
		ohottab[c].className="hottab h-tab";
	}

	ohotshuffbox[2].onmouseover=function(){
		ohotbtn[4].style.cssText="display:block"
		ohotbtn[5].style.cssText="display:block"
	}
	ohotshuffbox[2].onmouseout=function(){
		ohotbtn[4].style.cssText="display:none"
		ohotbtn[5].style.cssText="display:none"
	}
	ohotbtn[4].onmouseover=function(){
		ohotbtn[4].style.cssText="display:block"
		ohotbtn[5].style.cssText="display:block"
	}
	ohotbtn[5].onmouseover=function(){
		ohotbtn[4].style.cssText="display:block"
		ohotbtn[5].style.cssText="display:block"
	}
	ohotbtn[5].onclick=function(){
		ohotshuff[d].className="hot-marginL";
		ohottab[d].className="hottab";
		d++;
		if(d >=10){
			d=10;
		}
		ohotshuff[d-1].className="hot-marginL";
		ohotshuff[10].className="";
		ohottab[d].className="hottab h-tab";
	}
	ohotbtn[4].onclick=function(){
		ohottab[d].className="hottab";
		d--;
		if(d <=7){
			d=7;
		}
		ohotshuff[d].className="";
		ohottab[d].className="hottab h-tab";
	}

	
	ohotshuffbox[3].onmouseover=function(){
		ohotbtn[6].style.cssText="display:block"
		ohotbtn[7].style.cssText="display:block"
	}
	ohotshuffbox[3].onmouseout=function(){
		ohotbtn[6].style.cssText="display:none"
		ohotbtn[7].style.cssText="display:none"
	}
	ohotbtn[6].onmouseover=function(){
		ohotbtn[6].style.cssText="display:block"
		ohotbtn[7].style.cssText="display:block"
	}
	ohotbtn[7].onmouseover=function(){
		ohotbtn[6].style.cssText="display:block"
		ohotbtn[7].style.cssText="display:block"
	}
	ohotbtn[7].onclick=function(){
		ohotshuff[e].className="hot-marginL";
		ohottab[e].className="hottab";
		e++;
		if(e >=14){
			e=14;
		}
		ohotshuff[e-1].className="hot-marginL";
		ohotshuff[14].className="";
		ohottab[e].className="hottab h-tab";
	}
	ohotbtn[6].onclick=function(){
		ohottab[e].className="hottab";
		e--;
		if(e<=11){
			e=11;
		}
		ohotshuff[e].className="";
		ohottab[e].className="hottab h-tab";
	}

	