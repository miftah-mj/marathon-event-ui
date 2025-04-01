const galleryItems = [
    {
        type: "photo",
        url: "https://i.ibb.co.com/Vjq3Y01/66250786d88a84-78124202.jpg",
        title: "Marathon 2024 Finish Line",
        description: "Runners crossing the finish line.",
    },
    {
        type: "video",
        url: "https://www.youtube.com/embed/BgV9r1IuOaE?si=zUzYVaNAhMyYjXsy",
        title: "Event Highlights 2024",
        description: "Watch the highlights from the marathon event.",
    },
    {
        type: "photo",
        url: "https://i.ibb.co.com/zHMVyNw/silhouette-young-man-running-sprinting-600nw-1978910810.jpg",
        title: "Runners in Action",
        description: "Athletes pushing their limits on the racecourse.",
    },
];

const Gallery = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-0  py-12">
            <h6 className="text-xl font-raleway font-bold text-center text-textSecondary mb-4 uppercase">
                Event Gallery
            </h6>
            <h3 className="text-3xl font-raleway font-semibold text-center text-textPrimary mb-10 uppercase">
                Check out the photos and videos from the latest marathon events
                here
            </h3>

            {/* Gallery Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
                        className="card card-compact w-full shadow-lg rounded-lg"
                    >
                        {item.type === "photo" ? (
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                        ) : (
                            <div className="relative w-full h-64">
                                <iframe
                                    src={item.url}
                                    title={item.title}
                                    className="w-full h-full rounded-t-lg"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        )}
                        <div className="card-body p-4">
                            <h2 className="card-title text-xl font-semibold">
                                {item.title}
                            </h2>
                            <p className="text-textSecondary">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
