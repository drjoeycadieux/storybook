/**
 * Displays a banner at the top of the page with an important update message.
 *
 * The banner is styled with a yellow background and black text, centered both
 * horizontally and vertically. It is positioned absolutely at the top of the page
 * and spans the full width. The message includes emojis for emphasis.
 */
export default function Banner() {
    return (
        <div className="bg-yellow-500 text-black text-center py-2 z-20 absolute top-0 left-0 w-full">
            <p className="font-medium">
                Important Update: 🌟 Our website has a new look! Check it out! 👀✨
            </p>
        </div>
    )
}