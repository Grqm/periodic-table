var threads = [
    {
        id: 1,
        title: "Thread Title",
        author: "Author",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Author",
                date: Date.now(),
                content: "Comment content",
            }
        ]
    }
]

var threads;
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}