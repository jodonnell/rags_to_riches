class Tracking {
    static track(event) {
        if (process.env.NODE_ENV !== 'production') {
            return;
        }

        mixpanel.track(event);
    }
}

export default Tracking;
