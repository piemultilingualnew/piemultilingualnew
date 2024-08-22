const PricingCards = ({apiData}) => {
    const data = apiData;
    console.log(data.Pricing_cards)
    const pattern = /(\$\s*\d+(?:\.\d{1,2})?)?\s*(.*)/;
  return (
    (data !== null && data.Pricing_cards != null) ? <div className='w-full h-[420px] max-w-[1210px] mx-auto grid grid-cols-2 grid-rows-2 gap-5 text-black my-[10px]'>
        {
            data.Pricing_cards.map((card, index) => (
                <div className={`relative w-full h-full ${data.Pricing_cards.length >= 3 && index > 0 ? 'row-span-1' : 'row-span-2'}`} key={index}>
                    <div className='w-full h-full rounded-md overflow-hidden'>
                        <div className='w-full h-full border-[6px] flex items-center overflow-hiddens' style={{borderImage: 'linear-gradient(to right, rgba(150,17,194,0.99781162464986) 0%, rgba(199,16,212,1) 38%, rgba(0,212,255,1) 100%) 1'}}>
                            
                        </div>
                    </div>
                    <div className='w-full h-full rounded-md absolute top-3 right-[0.75em] overflow-hidden'>
                        <div className='w-full h-full border-[6px] px-[20px] py-4' style={{borderImage: 'linear-gradient(to right, rgba(194,186,17,0.99781162464986) 0%, rgba(208,212,16,1) 38%, rgba(255,102,0,1) 100%) 1'}}>
                            <h2 className={`text-[24px] font-acme uppercase mb-[8px] ${index === 0 ? 'text-center' : ''}`}>{card.heading}</h2>
                            <div className={`${index === 0 ? 'h-[80%] lg:h-[87%]' : 'h-[70%]'} relative`}>
                                <p className={`${data.Pricing_cards.length >= 3 && index > 0 ? 'w-3/5' : ''}`}>{card.content}</p>
                                <div className={`w-[140px] h-[140px] rounded-full overflow-hidden hover:shadow-lg hover:shadow-[#ff6600] transition-shadow duration-300 flex flex-col items-center justify-center absolute bottom-0 -right-3`} style={{backgroundImage: 'url(/imgs/price_circle.webp)', backgroundPosition: 'center', backgroundSize: '100% 100%'}}>
                                    {(card.price.match(pattern)[1]) ? <span className='text-white font-semibold text-[18px]'>{card.price.match(pattern)[1]}</span> : <></>}
                                    {(card.price.match(pattern)[2]) ? <span className='text-white font-semibold text-[18px]'>{card.price.match(pattern)[2]}</span> : <></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div> : <></>
  )
}

export default PricingCards