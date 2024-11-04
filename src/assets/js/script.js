$(() => {
    $("#avatarClick").click((e) => {
        e.preventDefault();
        e.stopPropagation(); // Empêche la propagation pour éviter de fermer immédiatement
        $("#userSet").toggle();
    });
    
    $(document).click((e) => {
        // Si le clic est en dehors de #avatarClick et de #userSet, on ferme #userSet
        if (!$(e.target).closest("#avatarClick").length && !$(e.target).closest("#userSet").length) {
            $("#userSet").hide();
        }
    });

    $("#curtain").click((e)=>{
        e.preventDefault()
        $("#sidebar").toggleClass("active")
        $("#body").
    })
});
