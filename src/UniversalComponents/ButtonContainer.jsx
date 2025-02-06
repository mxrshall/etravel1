import Button from "../Button"

function ButtonContainer({link}) {

    return (
        <div className="w-full flex pt-[3%]">
            {link.map((item, index) => (
                <Button
                    key={index}
                    text={item.title}
                    link={item.link}
                    delay={item.delay}
                />
            ))}
        </div>
    )
  }
  
  export default ButtonContainer