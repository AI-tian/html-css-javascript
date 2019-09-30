var oyoubtn=document.querySelectorAll(".right-btnbox li"),
	oyoucon=document.getElementsByClassName("you-con");
	oyoubtn[0].style.cssText="border:1px solid #e0e0e0;color:#e0e0e0";
	num=0;
	oyoubtn[1].onmouseover=function(){
		this.style.cssText="color:#f30";
	}
	oyoubtn[1].onmouseout=function(){
		this.style.cssText="color:#b0b0b0";
	}
	oyoubtn[1].onclick=function(){
		oyoubtn[0].style.cssText="border:1px solid #bobobo;color:#bobobo";
		oyoubtn[0].onmouseover=function(){
			this.style.cssText="color:#f30";
		}
		oyoubtn[0].onmouseout=function(){
			this.style.cssText="color:#b0b0b0";
		}
		oyoucon[num].className="you-con margin-L";
		num++;
		if(num>=2){
			num=2;
			oyoubtn[1].style.cssText="border:1px solid #e0e0e0;color:#e0e0e0";
			oyoubtn[1].onmouseover=function(){
				this.style.cssText="color:#e0e0e0";
			}
			oyoubtn[1].onmouseout=function(){
				this.style.cssText="color:#e0e0e0";
			}
		}
		oyoucon[num-1].className="you-con margin-L";
		oyoucon[2].className="you-con";
	}
	oyoubtn[0].onclick=function(){
		oyoubtn[1].style.cssText="border:1px solid #bobobo;color:#bobobo";
		oyoubtn[1].onmouseover=function(){
			this.style.cssText="color:#f30";
		}
		oyoubtn[1].onmouseout=function(){
			this.style.cssText="color:#b0b0b0";
		}
		num--;
		if(num<=0){
			num=0;
			oyoubtn[0].style.cssText="border:1px solid #e0e0e0;color:#e0e0e0";
			oyoubtn[0].onmouseover=function(){
				this.style.cssText="color:#e0e0e0";
			}
			oyoubtn[0].onmouseout=function(){
				this.style.cssText="color:#e0e0e0";
			}
		}
		oyoucon[num].className="you-con";
	}