import Link from 'next/link';


function Button({content, id}) {
    return (
        <Link href="https://wa.me/+2349047364596?text=" id={id} target="_blank" className="invest inline-block">
            <div className="flex flex-row items-center justify-center rounded gap-2 w-[17rem] text-white text-lg text-center sm:mx-auto bg-primary px-2 py-2.5">
                <span>{content}</span>
            </div>
        </Link>
    );
}

export default Button;