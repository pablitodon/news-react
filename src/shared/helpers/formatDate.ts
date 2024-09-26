



export const  formatDate = (date:Date) => {
    
    const options:Intl.DateTimeFormatOptions = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
    }

    return date.toLocaleDateString('en-US',options);
}

// Intl.DateTimeFormatOptions готовый 
// интерфейс предоставляет библиотека javascript Api