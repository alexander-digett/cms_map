/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /gh/brikflow/webflow_components@main/cms_map.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function createmap(e){let n=document.getElementsByClassName(e.title),t=document.getElementsByClassName(e.latitude),s=document.getElementsByClassName(e.longitude),i=document.getElementsByClassName(e.listingimage),o=document.getElementsByClassName(e.listingdescription),l=[],a=[];for(M=0;M<n.length;M++){var m=i[M].src;""!=t[M].innerHTML&&""!=s[M].innerHTML&&a.push({tittle:n[M].innerHTML,lat:Number(t[M].innerHTML),lng:Number(s[M].innerHTML),contdiv:(c=n[M].innerHTML,r=m,d=o[M].innerHTML,'<div class="info-box"><img class="projimg" src="'+r+'"/><p class="projname">'+c+'</p><p class="projdesc">'+d+"</p></div>")})}var c,r,d;const g=new google.maps.Map(document.getElementById("map-div"),{zoom:11,center:a[0]}),p=new google.maps.InfoWindow;var u,M;for(M=0;M<a.length;M++)u=new google.maps.Marker({position:a[M],map:g,title:a[M].tittle}),l.push(u),v(u,a[M].contdiv);function v(e,n){e.addListener("click",(()=>{p.setContent(n),p.open({anchor:e,map:g,shouldFocus:!1})}))}$(".w-dyn-items .w-dyn-item").click((function(){}))}
//# sourceMappingURL=/sm/42578a0608593625c7121b816ce55cc9dbef5e4a1e982e75ff8000549f46d30c.map