document.addEventListener('DOMContentLoaded', function() {
    fetch('path/to/contests.json')
        .then(response => response.json())
        .then(data => {
            const contestListContainer = document.getElementById('contest-list');
            data.forEach(contest => {
                const contestItem = document.createElement('article');
                contestItem.className = 'contest-item';

                const img = document.createElement('img');
                img.src = `../공모전 자료 img/${contest.imge}`;
                img.alt = contest.name;

                const contestDetail = document.createElement('div');
                contestDetail.className = 'contest-detail';

                const nameDiv = document.createElement('div');
                nameDiv.className = 'name';
                nameDiv.textContent = contest.name;

                const timeElem = document.createElement('time');
                timeElem.textContent = contest.hour;

                const categorySpan = document.createElement('span');
                categorySpan.className = 'category';
                categorySpan.textContent = contest.category;

                contestDetail.appendChild(nameDiv);
                contestDetail.appendChild(timeElem);
                contestDetail.appendChild(categorySpan);

                contestItem.appendChild(img);
                contestItem.appendChild(contestDetail);

                contestListContainer.appendChild(contestItem);
            });
        })
        .catch(error => console.error('Error fetching contest data:', error));
});