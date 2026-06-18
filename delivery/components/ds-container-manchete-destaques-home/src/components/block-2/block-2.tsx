import { CardNewsHighlight } from '@nodo-ds/react-ui/card-news-highlight';
import { CardVideo } from '@nodo-ds/react-ui/card-video';
import React from 'react';

import './block-2.scss';
import { CardNewsDefault } from '@nodo-ds/react-ui/card-news-default';
import { CardNewsMain } from '@nodo-ds/react-ui/card-news-main';
import { Divider } from '@nodo-ds/react-ui/divider';

interface Block2Props {
    className?: string;
    componentClass?: string;
}

export default function Block2({ className = '', componentClass = '' }: Block2Props) {
    const componentClassName = `${componentClass}-block2`;

    return (
        <div className={`${componentClassName} ${className}`}>
            <div className={`${componentClassName}__col1`}>
                <CardNewsMain
                    subtitle='Associação criminosa investigada envolve importadores, despachantes e servidores públicos, aponta investigação'
                    tagHat='Investigação da PF'
                    tagHatVariant='default'
                    title='Esquema de corrupção na alfândega do Porto do Rio é alvo de operação; 17 auditores são afastados'
                    url='https://example.com/news'
                />

                <Divider />

                <div className={`${componentClassName}__col1-bottom`}>
                    <CardNewsDefault
                        resourceType='none'
                        tagHat='Sucessão no Rio'
                        title='Zanin suspende eleição indireta e mantém Couto governador até que plenário do STF julgue'
                        url='https://example.com/news'
                    />

                    <CardNewsDefault
                        resourceType='none'
                        tagHat='Malu Gaspar'
                        title='Liminar de Moraes que restringe Coaf é guinada em relação ao que ele mesmo decidiu há sete meses'
                        url='https://example.com/news'
                    />
                </div>
            </div>

            <div className={`${componentClassName}__col2`}></div>
        </div>
    );
}
