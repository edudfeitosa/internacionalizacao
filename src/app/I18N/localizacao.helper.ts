export abstract class LocalizacaoHelper {
  public static localizacaoIdPadrao = 'pt';
  public static localizacoesImplementados = ['es-MX', 'en'];

  public static setaLocalizacaoAtual(localizacaoId: string) {
    localStorage.setItem('__localizacaoId', localizacaoId);
  }

  public static localizacaoAtual(): boolean {
    return LocalizacaoHelper.getLocalizacaoAtual() === this.localizacaoIdPadrao;
  }

  public static getLocalizacaoAtual(): string {
    // Verifica se existe o localeId no `localStorage`, se não, utiliza o locale padrão 'pt-BR'.
    // Ao carregar aplicação, verifica a linguagem do browser
    const LOCALIZACAO_ID_STORAGE = <string>localStorage.getItem('__localizacaoId');
    if (LOCALIZACAO_ID_STORAGE == null) {
      let localidadeNeutra = null;
      for (const id in LocalizacaoHelper.localizacoesImplementados) {
        const LOCALIZACAO_IMPLEMENTADA = LocalizacaoHelper.localizacoesImplementados[id];
        if (navigator.language === LOCALIZACAO_IMPLEMENTADA) {
          // linguagem do navegador for exata com a localização implementada
          return LOCALIZACAO_IMPLEMENTADA;
        } else if (navigator.language.startsWith(LOCALIZACAO_IMPLEMENTADA)) {
          // caso o navegador retorne 'es-MX' e a localização implementada seja 'es'
          localidadeNeutra = LOCALIZACAO_IMPLEMENTADA;
        } else if (LOCALIZACAO_IMPLEMENTADA.startsWith(navigator.language)) {
          // caso o navegador retorne 'es' e a localização implementada seja 'es-MX'
          localidadeNeutra = LOCALIZACAO_IMPLEMENTADA;
        }
      }
      if (localidadeNeutra != null) { return localidadeNeutra; }
    }
    return LOCALIZACAO_ID_STORAGE || this.localizacaoIdPadrao;
  }
}