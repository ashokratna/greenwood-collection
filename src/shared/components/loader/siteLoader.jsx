import './loader.css';
const SiteLoader = () => {
    return <div className="logoLoading">
        <figure>
            <img src={ `${process.env.PUBLIC_URL}/images/demivolt.svg` } alt="site-loader" />
        </figure>
    </div>;
};

export default SiteLoader;