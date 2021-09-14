
document.getElementById('posts').addEventListener('change', () => {
    if (typeof +document.getElementById('posts').value === typeof 1){
        document.getElementById('posts').classList.add('valid')
        document.getElementById('posts').classList.remove('error')
    }
    else{
        document.getElementById('posts').classList.remove('valid')
        document.getElementById('posts').classList.add('error')
    }
});
document.getElementById('comments').value;
document.getElementById('reactions').value;
document.getElementById('activemembers').value;

document.getElementById("buttoncheck").addEventListener(('click'),() => {
    let posts = document.getElementById('posts').value;
    let comments = document.getElementById('comments').value;
    let reactions = document.getElementById('reactions').value;
    let activemembers = document.getElementById('activemembers').value;

    document.getElementById('response').innerText = ((+posts + (+comments*2) + +reactions)/+activemembers);
})

document.getElementById('middlebutton').addEventListener(('click'), () => {
    let actual = document.getElementById('actual').value;
    let last = document.getElementById('last').value;

    document.getElementById('middlescore').innerText = ((actual / last)-1);
})