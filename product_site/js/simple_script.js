// Array to store poll options and values
const poll_options = [
    {name: "Memory Mints,", votes: 0},
    {name: "Tiny Violin", votes: 0}
];


// Function to render poll options
function render_poll_options(){
    const poll_container = document.createElement('div');
    poll_container.id = 'poll-container';
    poll_container.innerHTML = `<h2>Vote for Your Favorite Gag Gift</h2>`;

    // loop to create radio buttons for each poll option
    poll_options.forEach((option, index) => {
        const option_div = document.createElement('div')
        option_div.classList.add('poll-option');

        option_div.innerHTML = `
            <input type="radio" name="gagGift" id="option-${index}" value="${index}>
            <label for="option-${index}">${option.name}</label>
        `;


        poll_container.appendChild(option_div);
    });

    const vote_button = document.createElement('button');
    vote_button.textContent = "Vote";
    vote_button.onclick = handle_vote;
    poll_container.appendChild(vote_button);



    const results_div = document.createElement('div');
    results_div.id = 'poll-results';
    results_div.innerHTML = `<h3> Current Standings:</h3><ul id="results-list"></ul>`;
    poll_container.appendChild(results_div);

    document.body.appendChild(poll_container);
    update_results();

}

// function to handle vote submission
function handle_vote(){
    const selected_option = document.querySelector('input[name="gagGift"]:checked');

    if (!selected_option){
        alert("Please select a gag gift to vote!");
        return;
    }

    const option_index = parseInt(selected_option.value);
    poll_options[option_index].votes += 1;

    update_results();
}

// function to update and display current poll results
function update_results(){
    const results_list = document.getElementById('results-list');
    results_list.innerHTML = '';

    poll_options.forEach(option => {
        const list_item = document.createElement('li');
        list_item.textContent = `${option.name}: ${option.votes} votes`;
        results_list.appendChild(list_item);
    });
}

// event listener to render poll and position 
document.addEventListener('DOMContentLoaded', () => {
    render_poll_options();

    const poll_container = document.getElementById('poll-container');
    const footer = document.querySelector('footer');
    document.body.insertBefore(poll_container, footer);
});