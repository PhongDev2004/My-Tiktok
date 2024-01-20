## import {

    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallback,
    useMemo,
    useReducer,
    userContext,
    useImperativeHandle,
    useDebugValue,
    useDeferredValue
    useId,
    useOptimistic,
    useInsertionEffect,
    useTransition,
    useSyncExternalStore

} from 'react'.

// Chưa sử dụng hooks, chỉ là UI component

## function ComponentA() {

    return <h1> Haven't used hooks yet </h1>

}

// Sử dụng hooks, hổ trợ thêm nhiều tính năng

## function ComponentB() {

    // useState
    const [state, setState] = useState(initState);

    // useEffect
    useEffect(() => {

    }, [deps])

    // useLayoutEffect(() => {

    }, [deps])

    // useRef
    const ref = useRef();

    // useCallback
    const fn = useCallback(() => {

    }, [deps])

    // useMemo
    const results = useMemo(() => {

    } , [deps])

    // useReducer
    const [state, dispatch] = useReducer(reducer, initialArg, init)

    // useContext
    const value = useContext(MyContext)

    // useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    // useDebugValue
    useDebugValue(isOnline ? 'isOnline': 'isOffline');

    // useDeferredValue
    const deferredValue = useDeferredValue(value)

    // useId
    const id = useId()

    // useOptimistic
    const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);

    // useInsertionEffect
    seInsertionEffect(setup, dependencies?)

    // useTransition
    const [isPending, startTransition] = useTransition()

    // useSyncExternalStore
    const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)

    return <h1>Hooks</h1>

}
