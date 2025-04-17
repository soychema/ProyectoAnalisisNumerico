let a=[]
let n=[]

function add(a,n){
  i=n.indexOf(document.getElementById("exp").value)
  if i=="-1"{
    l=n.length
    j=0
    for j in l{
      if n[j]>document.getElementById("exp").value{
        break
      }
    }
    a.splice(j,0,document.getElementById("coef").value)
    n.splice(j,0,document.getElementById("exp").value)
  }
  else{
    a[i]=+document.getElementById("coef").value
    if a[i]==0{
      a.splice(i,1)
      n.splice(i,1)
    }
  }
  alert(a)
  showPx(a,n)
}

function showPx(a,n){
  text=getElementBynId("polinomio")
  p="p(x)="
  i=0
  for i in a.length{
    if i==0 || a[i]<0{
        p+=a[i]+"x^"+n[i]
    }
    else{
        p+="+"+a[i]+"x^"+n[i]
    }
  }
  text.innerHTML=p
}