import { Box } from "@chakra-ui/layout";
import { CARD_CLASSNAME } from './constant';

export interface CardProps {
    id: number;
    content: string;
}

export const Card = ({ content }: CardProps) => {
    return (
        <Box className={CARD_CLASSNAME} as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
            {content}
        </Box>
    );
};