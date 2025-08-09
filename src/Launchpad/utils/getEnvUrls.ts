const PROD_URL = {
  DP_URL: 'https://price.tabist.co.jp',
  PMS_URL: 'https://pms.tabist.co.jp',
  DC_URL: 'https://direct-channel-web-internal.tabist.co.jp',
  REVIEW_MANAGEMENT_URL: 'https://reviews.tabist.ai',
  UMS_URL: 'https://ums.tabist.co.jp',
};

const STG_URL = {
  DP_URL: 'https://price-engine-web.stg.tabist.co.jp',
  PMS_URL: 'https://pms.internal.stg.tabist.co.jp',
  DC_URL: 'https://direct-channel-web-internal.stg.tabist.co.jp',
  REVIEW_MANAGEMENT_URL: 'https://reviews.staging.tabist.ai',
  UMS_URL: 'https://ums.stg.tabist.co.jp',
};

const DEV_URL = {
  DP_URL: 'https://price-engine-web.dev.tabist.co.jp',
  PMS_URL: 'https://pms.internal.stg.tabist.co.jp',
  DC_URL: 'https://direct-channel-web-internal.dev.tabist.co.jp',
  REVIEW_MANAGEMENT_URL: 'https://reviews.dev.tabist.ai',
  UMS_URL: 'https://ums.dev.tabist.co.jp',
};

const LOCAL_URL = {
  DP_URL: 'http://127.0.0.1:3000',
  PMS_URL: 'http://127.0.0.1:3000',
  DC_URL: 'http://127.0.0.1:3000',
  REVIEW_MANAGEMENT_URL: 'http://127.0.0.1:3000',
  UMS_URL: 'http://127.0.0.1:3001',
};

export const getEnvUrls = () => {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;

    if (
      host.includes('localhost') ||
      host.includes('0.0.0.0') ||
      host.includes('127.0.0.1')
    ) {
      return LOCAL_URL;
    }

    if (host.includes('.stg') || host.includes('.staging')) {
      return STG_URL;
    }

    if (host.includes('.dev')) {
      return DEV_URL;
    }

    return PROD_URL;
  }

  // Fallback for SSR
  return PROD_URL;
};
