const getErrorMessage = (error: unknown): string | undefined => {
    let errorMessage;

    if (typeof error === 'string') {
        errorMessage = error.toUpperCase();
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return errorMessage;
};

export default getErrorMessage;
