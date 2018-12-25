var coll = document.getElementById('collapsible');

coll.addEventListener('click', () => {
    const element = coll.nextElementSibling;
    if (element.style.display === 'block') {
        element.style.display = 'none';
        element.style.maxHeight = '0px';
    } else {
        element.style.display = 'block';
        element.style.maxHeight = content.scrollHeight + 10 + 'px';
    }
});

window.onload = () => {
    fetch('https://www.codewars.com/api/v1/users/scorwin', {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache'
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            document.getElementById('codewars').innerHTML = (
               'Honor: ' + json.honor + '<br>' + 'Overall kyu' + json.ranks.overall.name +
               '<br>' + 'Python Rank: ' + json.ranks.languages.python.name + '<br>' + 
               'Javascript Rank: ' + json.ranks.language.javascript.name + '<br>' + 
               'Total Completed Challenges: ' + json.codeChallenges.totalCompleted 
            );
        })
}