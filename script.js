document.addEventListener('DOMContentLoaded', (event) => {
    const messages = [
        "亲爱的中考考生们，祝你们在考试中发挥出最佳水平！记住，努力会有回报，坚持就是胜利！我们相信你们一定能取得优异的成绩，未来的路上一定会更加光明灿烂！加油！",
        "相信自己，每一分努力都是成功的累积。中考加油！",
        "不怕千万人阻挡，只怕自己投降。坚持到底，中考必胜！",
        "努力不一定成功，但放弃一定失败。中考加油，你是最棒的！",
        "勇敢面对每一次挑战，努力争取每一个进步。祝中考顺利，加油！",
        "自信是成功的第一秘诀，保持自信，迎接中考！"
    ];

    const messageElement = document.getElementById('message');
    const changeMessageBtn = document.getElementById('changeMessageBtn');

    changeMessageBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageElement.textContent = messages[randomIndex];
        changeBackgroundColor();
    });

    function changeBackgroundColor() {
        const colors = ['#83a4d4', '#b6fbff', '#ffafbd', '#ffc3a0', '#2193b0', '#6dd5ed'];
        const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    }
});
