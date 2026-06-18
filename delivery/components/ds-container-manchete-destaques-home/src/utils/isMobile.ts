/**
 * Verifica se a resolução da tela é mobile (menor que 767px)
 * @returns {boolean} true se a largura da tela for menor que 767px, false caso contrário
 */
export function isMobile(): boolean {
    return window.innerWidth < 767;
}

/**
 * Adiciona um listener para detectar mudanças na resolução da tela
 * @param {(isMobile: boolean) => void} callback - Função callback que será executada quando o tamanho da tela mudar
 * @returns {() => void} Função para remover o listener
 */
export function onResizeChange(callback: (isMobile: boolean) => void): () => void {
    callback(isMobile());

    const handleResize = () => {
        callback(isMobile());
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}
