let timId: any;

const useDebouncer = (cb: Function, debounce_time: number) => {
    return (...props: any[]) => {
        clearTimeout(timId);

        timId = setTimeout(() => {
            cb(...props);
        }, debounce_time);
    }
}

export {
    useDebouncer,
}
