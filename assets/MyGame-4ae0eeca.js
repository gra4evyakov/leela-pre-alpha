import{_ as C,r as i,o as t,c as o,F as d,a as E,w as _,n as f,b as s,d as B,p as v,e as m}from"./index-460dc4ab.js";const D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAHoSURBVHhe7dwxLwRBGIfxY/acUnu1KHXXaITSJ6HRoZCoJAp0Gj6JSiQaivsKWkrac7vOjrwRkSjmzPi/4fk1a7eYYp49d8m+2Q4AAAAAAMDvmbGjK4dHg8XeXHe3qsKqXfqRum5uRi/jk4P94b1dcsNlgOPTlfN2wzbtNIs26MXezu2Wnboxa0dXct35n5VYMweXAf4TAogRQIwAYgQQI4AYAcQIIEYAMQKIEUCMAGIEECOAGAHECCBGADECiBFAjABiBBBzFyDOBI1G476dZhPXjGvbqRvBji7EDaqqcFY3zbJdyuZ1Mplv115aW+/fXV89PNlluaTBrNwTa1/Fu7Td/AU7LaIK4bnX6z7aaVbTTOAlBSgxsfbXpE7gJX0HeJ0u8yR1j/gVJEYAMQKIEUCMAGIEECOAGAHECCBGADECiBFAjABiBBAjgBgBxAgglhQgPvO0P/GN1D3ioXxGxR/Kl/YxllI3G3Ypq3bty3btbU/vDXL3vqD3CCEMc38S4p3frjnw9tImd1/CcYNK/IuIa3rb/IhfQWIEECOAGAHECCBGADECiBFAjABiBBAjgBgBxAggRgAxAogRQIwAYgQQI4AYAcQIIOYyQIkJvBJr5uBuLijKPYE3zcQaAAAAAADAn9PpvAGlEJWWOmBzPAAAAABJRU5ErkJggg==";const G={name:"Grid",setup(){const e=i(""),a=u=>{const l=u.target.files[0];e.value=URL.createObjectURL(l)},A=i([null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);let n=null;function c(u,l){if(n!==null&&n!==l){const I=A.value[n];A.value[n]=A.value[l],A.value[l]=I}n=null}function g(u,l){n=l,u.dataTransfer.setData("text/plain",l),u.target.style.opacity="0.4"}function r(u){u.target.style.opacity="1"}return{cells:A,handleDrop:c,handleDragStart:g,handleDragEnd:r,onFileChange:a,backgroundImageUrl:e}}},p=e=>(v("data-v-53c87aa9"),e=e(),m(),e),b={class:"lila"},h=["onDrop"],Q=["onDragstart"],y=p(()=>s("img",{src:D,alt:"plus"},null,-1)),R=p(()=>s("span",null,"ДОБАВИТЬ ФОТО",-1));function Y(e,a,A,n,c,g){return t(),o("div",b,[(t(!0),o(d,null,E(n.cells,(r,u)=>(t(),o("div",{class:"cell",key:u,onDragover:a[2]||(a[2]=_(()=>{},["prevent"])),onDrop:l=>n.handleDrop(l,u)},[r?(t(),o("div",{key:0,class:"chip",draggable:"true",onDragstart:l=>n.handleDragStart(l,u),onDragend:a[1]||(a[1]=l=>n.handleDragEnd(l)),style:f({"background-image":"url("+n.backgroundImageUrl+")"})},[n.backgroundImageUrl?B("",!0):(t(),o(d,{key:0},[s("input",{id:"fileInput",type:"file",onChange:a[0]||(a[0]=(...l)=>n.onFileChange&&n.onFileChange(...l))},null,32),y,R],64))],44,Q)):B("",!0)],40,h))),128))])}const U=C(G,[["render",Y],["__scopeId","data-v-53c87aa9"]]);export{U as default};