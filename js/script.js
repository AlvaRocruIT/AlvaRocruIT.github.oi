document.addEventListener("DOMContentLoaded", function () {
    const bulletPoints = document.querySelectorAll(".bullet-point");
    const rectangles = document.querySelectorAll(".rectangle");

    // Evento para los bullet points
    bulletPoints.forEach((point, index) => {
        point.addEventListener("click", function () {
            const content = this.nextElementSibling; // Selecciona el contenido correspondiente

            // Ocultar todos los contenidos
            bulletPoints.forEach((bp, i) => {
                const allContents = bp.nextElementSibling;
                if (i !== index) {
                    allContents.style.display = "none"; // Ocultar todos menos el actual
                    bp.style.color = "#A6CAEC"; // Restablecer color
                    rectangles[i].style.backgroundColor = "#DDE7F1"; // Restablecer color del rectángulo
                }
            });

            // Alternar el contenido actual
            if (content.style.display === "block") {
                content.style.display = "none"; // Ocultar el contenido
                this.style.color = "#A6CAEC"; // Restablecer color del encabezado
                rectangles[index].style.backgroundColor = "#DDE7F1"; // Restablecer color del rectángulo
            } else {
                content.style.display = "block"; // Mostrar el contenido
                this.style.color = "#0A66C2"; // Cambiar color del encabezado
                rectangles[index].style.backgroundColor = "#A6CAEC"; // Cambiar color del rectángulo
            }
        });
    });

    // Evento para los rectángulos
    rectangles.forEach((rectangle, index) => {
        rectangle.addEventListener("click", function () {
            // Hacer clic en el bullet point correspondiente
            bulletPoints[index].click(); // Abrir o cerrar el bullet correspondiente
        });
    });
});