import React, { useMemo } from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import styles from '../styles/Landing.module.css';
import { useLocale } from 'locale/localeHook';
import { useRecoilState } from 'recoil';
import { localeState } from 'store';

const Landing = () => {
  const [lang] = useRecoilState(localeState);

  const t = useMemo(() => {
    return useLocale(lang);
  }, [lang]);

  return (
    <Box className={styles.box}>
      <VStack>
        <Text className={styles.heading}>{t.DESC_3}</Text>
        <Text className={styles.subHeading}>{t.DESC_2}</Text>
      </VStack>
    </Box>
  );
};

export default Landing;
