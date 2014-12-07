
function moreLetters(stringLength){
  // can only be called when hidestring has at least one letter
a = ["a","a","a","a","a","a","a","a","a"]
b = ["b","b"]
c = ["c","c","c","c","c","c"]
d = ["d","d","d","d"]
e = ["e","e","e","e","e","e","e","e","e","e","e","e"]
f = ["f","f","f","f"]
g = ["g","g","g"]
h = ["h","h"]
i = ["i","i","i","i","i","i","i","i","i"]
j = ["j"]
k = ["k"]
l = ["l","l","l","l"]
m = ["m","m"]
n = ["n","n","n","n","n","n"]
o = ["o","o","o","o","o","o","o","o"]
p = ["p","p","p","p"]
q = ["q"]
r = ["r","r","r","r","r","r"]
s = ["s","s","s","s","s","s"]
t = ["t","t","t","t","t","t"]
u = ["u","u","u","u"]
v = ["v","v"]
w = ["w","w"]
x = ["x"]
y = ["y"]
z = ["z"]
var nextLetters = {
arr_a: [].concat(b,c,d,f,g,i,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z),
arr_b: [].concat(a,b,e,i,l,o,r,s,u,y),
arr_c: [].concat(a,c,e,h,i,k,l,o,q,r,t,u),
arr_d: [].concat(a,d,e,i,l,o,r,s,u),
arr_e: [].concat(a,b,c,d,e,f,g,j,k,l,m,n,p,q,r,s,t,v,w,x,z),
arr_f: [].concat(a,e,i,l,o,r,t,u),
arr_g: [].concat(a,e,g,h,i,l,o,r,s,u),
arr_h: [].concat(a,e,i,o,u),
arr_i: [].concat(b,c,d,e,f,g,k,l,m,n,o,p,r,s,t,v,x,z),
arr_j: [].concat(a,e,o,u),
arr_k: [].concat(e,i,s,y),
arr_l: [].concat(a,e,l,o,s,t,u,y),
arr_m: [].concat(a,b,e,i,m,o,p,s,u),
arr_n: [].concat(a,c,d,e,g,i,k,n,o,p,q,s,t,u),
arr_o: [].concat(a,b,c,d,f,g,i,k,l,m,n,o,p,r,s,t,u,v,w,x,y,z),
arr_p: [].concat(a,e,h,i,l,o,p,r,s,u,y),
arr_q: [].concat(u),
arr_r: [].concat(a,d,e,i,k,l,m,n,o,p,r,s,t,u,v,y),
arr_s: [].concat(a,e,h,i,k,l,m,n,o,p,q,s,t,u,w,y),
arr_t: [].concat(a,e,h,i,o,r,s,t,u,w),
arr_u: [].concat(b,c,d,f,g,i,k,l,m,n,p,r,s,t),
arr_v: [].concat(a,e,i,o),
arr_w: [].concat(a,e,h,o,r,s),
arr_x: [].concat(a,e,i,p,t),
arr_y: [].concat(a,e,o,s),
arr_z: [].concat(a,e,o),
all: [].concat(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)
}

str = $("#hidestring").data("hs").slice(-1)

while (str.length <= stringLength){
  var last_letter = "arr_"+str.slice(-1)

  var random_arr = nextLetters[last_letter]
  str += random_arr[Math.floor(Math.random()*random_arr.length)]
}
return str.substring(1)

}

function initialSetup(){
  weightedLetters = "aaaaaaaaabbccccccddddeeeeeeeeeeeeffffggghhiiiiiiiiijkllllmmnnnnnnooooooooppppqrrrrrrssssssttttttuuuuvvwwxyz"
  var randomLetter = weightedLetters[Math.floor(Math.random()*weightedLetters.length)]
  $("#hidestring").data("hs",randomLetter)
  $("#hidestring").data("hs",moreLetters(15))
  View.updateHs()
  Animate.reset()
}

function regenerateSmallString(){
  if (($("#hidestring").data("hs")).length < 10){
  var oldLetters = $("#hidestring").data("hs")
  var newLetters = moreLetters(15)

  $("#hidestring").data("hs",oldLetters+newLetters)
  View.updateHs

  }
}

//  Original method of string generation below: 

// function generateString(stringLength){
//   str = ""
//   letterOne = "bbccddddffggghhjkllllmmnnnnnnpprrrrrrssssttttttvwy".split("")
//   letterTwo = "bbccddddffggghhllllmmnnnnnnpprrrrrrsssstttttt".split("")
//   letterThree = "aaaaaaaaaeeeeeeeeeeeeiiiiiiiiioooooooouuuu".split("")
//   while (true){
//     str += letterOne[Math.floor(Math.random()*letterOne.length)]
//     if (str.length==stringLength) return str
//     str += letterTwo[Math.floor(Math.random()*letterTwo.length)]
//     if (str.length==stringLength) return str
//     str += letterThree[Math.floor(Math.random()*letterThree.length)]
//     if (str.length==stringLength) return str
//   }
// }



