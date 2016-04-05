import makeFinalStore from 'alt-utils/lib/makeFinalStore';

export default (alt, storage, storeName) => {
    const finalStore = makeFinalStore(alt);

    try {
        alt.bootstrap(storage.get(storeName));
    } catch(e) {
        console.error('Failed to bootstrap data', e);
    }

    finalStore.listen(() => {
        if (!store.get('debug')) {
            storage.set(storeName, alt.takeSnapshot());
        }
    });
}
