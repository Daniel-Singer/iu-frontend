import { Alert, Paper, ScrollArea, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listFaqs } from '../../queries/faq/listFaqs';
import Faq from '../../components/faq/Faq';

const FaqContainer = () => {
  const { data: faqs, isSuccess } = useQuery({
    queryKey: ['faqs'],
    queryFn: listFaqs,
  });
  return (
    <ScrollArea.Autosize>
      <Paper flex={1}>
        {!faqs && isSuccess ? (
          <Alert color="blue">
            <Text size="sm" c="blue">
              Keine FAQ's hinterlegt
            </Text>
          </Alert>
        ) : (
          <>
            {faqs?.map((faq, index) => (
              <Faq key={faq.id!} {...faq} index={index!} />
            ))}
          </>
        )}
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default FaqContainer;
