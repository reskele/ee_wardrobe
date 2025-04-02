function postStory() {
    const input = document.getElementById("story-input");
    const storyText = input.value.trim();
    if (storyText === "") {
        alert("Please write a story before posting.");
        return;
    }
    
    const storyList = document.getElementById("story-list");
    const storyDiv = document.createElement("div");
    storyDiv.className = "story";
    
    const storyContent = document.createElement("p");
    storyContent.textContent = storyText;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        storyList.removeChild(storyDiv);
    };
    
    storyDiv.appendChild(storyContent);
    storyDiv.appendChild(deleteButton);
    storyList.prepend(storyDiv);
    
    input.value = "";
}