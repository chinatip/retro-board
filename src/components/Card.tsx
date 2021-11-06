import { Box } from "@chakra-ui/layout";

export interface CardProps {
    id: number;
    content: string;
}

export const Card = ({ content }: CardProps) => {
    return (
        <Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
            {content}
        </Box>
    );
};