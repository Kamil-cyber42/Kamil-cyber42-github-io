document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const commentText = document.getElementById("comment-text").value;
    if (commentText) {
        const commentList = document.getElementById("comment-list");

        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentText;

        commentList.appendChild(newComment);
        document.getElementById("comment-text").value = ''; // Очистить поле ввода
    }
});