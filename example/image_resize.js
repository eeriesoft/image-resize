function resizeImage(targetWidth, targetHeight, callback) {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    fileInput.click();

    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];

        if (!file) {
            // Handle the case where no file is selected
            console.error("No file selected.");
            document.body.removeChild(fileInput);
            return;
        }

        const reader = new FileReader();
        reader.onload = function () {
            const img = new Image();

            img.onload = function () {
                const aspectRatio = img.width / img.height;


                let width, height;

                const ration = targetWidth/img.width;
                const new_height =parseInt(( ration*img.height).toFixed(1))
                //console.log([new_height, targetWidth])


                // if (targetWidth / targetHeight > aspectRatio) {
                //     width = targetHeight * aspectRatio;
                //     height = targetHeight;
                // } else {
                //     width = targetWidth;
                //     height = targetWidth / aspectRatio;
                // }

                const canvas = document.createElement("canvas");
                canvas.width = targetWidth;
                canvas.height = targetHeight;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, targetWidth, new_height);
                //ctx.drawImage(img, 0, 0, width, height, 0, 0, targetWidth, targetHeight);

                const resizedImageUrl = canvas.toDataURL("image/png");

                callback(resizedImageUrl);

                // Optionally, remove the elements from the DOM
                document.body.removeChild(fileInput);

            };

            img.src = reader.result;
        };

        // Handle FileReader errors
        reader.onerror = function (error) {
            console.error("Error reading the file:", error);
            document.body.removeChild(fileInput);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    });
}


// // Example usage:
// resizeImage( 300, 200, function (resizedImageUrl) {
//     console.log('Resized Image URL:', resizedImageUrl);
//     // You can use the resizedImageUrl as needed here.
//     // The img element is already removed at this point.
// });