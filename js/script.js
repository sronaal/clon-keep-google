const textarea = document.getElementById('nota')


textarea.addEventListener('input', function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + 'px';
})