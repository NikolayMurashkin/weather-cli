const getArgs = (args) => {
    const preparedArgs = {};
    const [executer, file, ...rest] = args;
    rest.forEach((arg, index, arr) => {
        if (arg.charAt(0) === '-') {
            if (index === arr.length - 1) {
                preparedArgs[arg.substring(1)] = true;
            } else if (arr[index + 1].charAt(0) !== '-') {
                preparedArgs[arg.substring(1)] = arr[index + 1];
            } else {
                preparedArgs[arg.substring(1)] = true;
            }
        }
    });

    return preparedArgs;
};

export { getArgs };