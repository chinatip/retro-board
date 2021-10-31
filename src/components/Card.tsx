export interface CardProps {
    content: string;
}

export const Card = ({ content }: CardProps) => {
    return (
        <div>
            {content}
        </div>
    );
};