window.ShowToastr = (type, message) => {

    toastr.options.toastClass = "toastr";

    if (type === "success") {
        toastr.success(message, "Opration Successful", { timeOut: 20000 });
    }
    if (type === "error") {
        toastr.error(message, "Opration Failed", { timeOut: 20000 });
    }
};