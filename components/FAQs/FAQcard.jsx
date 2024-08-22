

export default function FAQscard(props) {
    const data = props.data;
    let textt=props.data.content;
    textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="text-[#F60] font-semibold">$1</a>');
    textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
    return (
        <div className="block overflow-hidden h-[230px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">{data.heading}</h5>
            <div className="h-[120px] overflow-hidden">
                <p className="font-normal text-gray-700  dark:text-gray-400" dangerouslySetInnerHTML={{__html:textt}}></p>

            </div>
        </div>
    )
}