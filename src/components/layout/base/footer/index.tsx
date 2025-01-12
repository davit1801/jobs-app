import PageContainer from '@/components/layout/containers/page-container';
import useI18nLang from '@/hooks/use-i18n-lang';
import React from 'react';

const Footer: React.FC = () => {
  const { t } = useI18nLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/50">
      <PageContainer>
        <div className="px-4 py-6 text-center text-base text-muted-foreground">
          <p>
            © {year} {t('footer.copyright')}
          </p>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
