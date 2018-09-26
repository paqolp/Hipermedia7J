let count = 0;
let last;

window.addEventListener('load', main);

function main() {
  var list = document.querySelectorAll('div[name^="card"]');
  for(let i = 0; i < list.length; i++)
    {
        console.log(list[i]);
        list[i].addEventListener('click', function() {
        if(this.className == 'hidden') {
            this.className = this.getAttribute('name');
            if(count == 1)
            {
                if(last.className == this.className) {
                    alert("Encontraste un par!!");
                } 
                else {
                    setTimeout(function() {
                        last.className = this.className = "hidden";
                    }.bind(this), 400);
                }
            }
            else{
                last = this;
            }
            count = 1 - count;
        }
      });
    } 
}