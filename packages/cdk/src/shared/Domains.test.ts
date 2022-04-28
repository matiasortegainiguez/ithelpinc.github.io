import { AUXILIARY_DOMAINS, toHostedZoneDomain } from './Domains';

describe('Domains', () => {
  describe('toHostedZoneDomain', () => {
    it('can properly remove multiple subdomains', () => {
      expect(toHostedZoneDomain('beta.output.www.it-help.net')).toBe('it-help.net.');
    });

    it('can handle domains with no host', () => {
      expect(toHostedZoneDomain('ithelpinc.nyc')).toBe('ithelpinc.nyc.');
    });

    it('can handle domains with two parts', () => {
      expect(toHostedZoneDomain('ithelpinc.co.in')).toBe('ithelpinc.co.in.');
    });
  });

  describe('AUXILIARY_DOMAINS', () => {
    it('returns the correct auxiliary domains', () => {
      expect(AUXILIARY_DOMAINS.length).toBe(13);
      expect(AUXILIARY_DOMAINS.includes('ithelpinc.co.in')).toBeTruthy();
    });
  });
});
