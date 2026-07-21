/**
 * config.js
 * Configuração central do sistema de agendamento do laboratório.
 * Ajuste os períodos e dias aqui — o restante do app se adapta automaticamente.
 */

const CONFIG = {
  labNome: "Laboratório de Informática Magnante",

  /**
   * Referência para o esquema quinzenal (2 em 2 semanas).
   * Deve ser uma segunda-feira. A semana que contém essa data — e todas
   * as que se repetem a cada 2 semanas a partir dela — é a "Semana A",
   * quando as aulas de Informática (professor + turma) acontecem.
   * Na semana intermediária ("Semana B") esses horários ficam livres
   * para agendamento avulso. Ajuste esta data se a contagem mudar.
   */
  semanaReferenciaA: "2026-08-03",

  // Dias da semana disponíveis para agendamento
  dias: [
    { id: 1, sigla: "SEG", nome: "Segunda-feira" },
    { id: 2, sigla: "TER", nome: "Terça-feira" },
    { id: 3, sigla: "QUA", nome: "Quarta-feira" },
    { id: 4, sigla: "QUI", nome: "Quinta-feira" },
    { id: 5, sigla: "SEX", nome: "Sexta-feira" },
    { id: 6, sigla: "SAB", nome: "Sábado" },
  ],

  // Períodos/horários de aula, agrupados por turno.
  // "id" é usado como valor no <select> e como referência na grade.
  periodos: [
    { id: "m1", turno: "manha", label: "1ª aula", inicio: "08:05", fim: "08:50" },
    { id: "m2", turno: "manha", label: "2ª aula", inicio: "08:55", fim: "09:40" },
    { id: "m3", turno: "manha", label: "3ª aula", inicio: "10:05", fim: "10:50" },
    { id: "m4", turno: "manha", label: "4ª aula", inicio: "11:10", fim: "11:55" },
    { id: "t1", turno: "tarde", label: "5ª aula", inicio: "13:30", fim: "14:30" },
    { id: "t2", turno: "tarde", label: "6ª aula", inicio: "14:35", fim: "15:35" },
    { id: "t3", turno: "tarde", label: "7ª aula", inicio: "16:00", fim: "17:15" },
  ],

  turnos: {
    manha: { label: "Manhã", cor: "var(--accent-amber)" },
    tarde: { label: "Tarde", cor: "var(--accent-teal)" },
  },

  /**
   * Grade fixa semanal do laboratório (não usa localStorage).
   * - periodicidade "semanal" (padrão, pode omitir o campo): repete toda semana.
   * - periodicidade "quinzenal" + semana "A": só fica ativo nas semanas A
   *   (a cada 2 semanas, a partir de semanaReferenciaA). Na semana B o
   *   horário some da grade fixa e volta a ficar livre para reservas.
   * "professor" vazio + disciplina "Pesquisa" = horário livre para pesquisa.
   */
  horarioFixo: [
    // Segunda-feira — Informática quinzenal (Semana A)
    { dia: 1, periodoId: "m1", professor: "Paula", turma: "53", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 1, periodoId: "m2", professor: "Denise", turma: "21", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 1, periodoId: "m3", professor: "", turma: "", disciplina: "Pesquisa" },
    { dia: 1, periodoId: "m4", professor: "Adriane", turma: "12", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },

    // Terça-feira — Informática quinzenal (Semana A)
    { dia: 2, periodoId: "m1", professor: "Lidiane", turma: "41", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 2, periodoId: "m2", professor: "Bruna", turma: "22", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 2, periodoId: "m3", professor: "", turma: "", disciplina: "Pesquisa" },
    { dia: 2, periodoId: "m4", professor: "Claudete", turma: "43", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 2, periodoId: "t3", professor: "Alice", turma: "55", disciplina: "Informática" },

    // Quarta-feira — Informática quinzenal (Semana A)
    { dia: 3, periodoId: "m1", professor: "Graziela", turma: "42", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 3, periodoId: "m2", professor: "Lúcia", turma: "32", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 3, periodoId: "m3", professor: "Eliane", turma: "33", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 3, periodoId: "m4", professor: "Luciana", turma: "31", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },

    // Quinta-feira — Informática quinzenal (Semana A)
    { dia: 4, periodoId: "m1", professor: "Bruna", turma: "52", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 4, periodoId: "m2", professor: "Bibiana", turma: "51", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },
    { dia: 4, periodoId: "m3", professor: "", turma: "", disciplina: "Pesquisa" },
    { dia: 4, periodoId: "m4", professor: "Adriane Lessa", turma: "11", disciplina: "Informática", periodicidade: "quinzenal", semana: "A" },

    // Sexta-feira — manhã inteira é pesquisa (toda semana)
    { dia: 5, periodoId: "m1", professor: "", turma: "", disciplina: "Pesquisa" },
    { dia: 5, periodoId: "m2", professor: "", turma: "", disciplina: "Pesquisa" },
    { dia: 5, periodoId: "m3", professor: "", turma: "", disciplina: "Pesquisa" },
    { dia: 5, periodoId: "m4", professor: "", turma: "", disciplina: "Pesquisa" },
    { dia: 5, periodoId: "t3", professor: "Gisele", turma: "54", disciplina: "Informática" },
  ],
};

/**
 * Retorna a segunda-feira da semana que contém a data informada.
 */
function _segundaFeiraDe(isoDate) {
  const d = new Date(`${isoDate}T00:00:00`);
  const dia = d.getDay();
  const diff = dia === 0 ? -6 : 1 - dia;
  d.setDate(d.getDate() + diff);
  return d;
}

/**
 * Diz se a data informada cai em uma "Semana A" do ciclo quinzenal.
 */
function ehSemanaA(isoDate) {
  const ref = _segundaFeiraDe(CONFIG.semanaReferenciaA);
  const alvo = _segundaFeiraDe(isoDate);
  const diffSemanas = Math.round((alvo - ref) / (7 * 86400000));
  return ((diffSemanas % 2) + 2) % 2 === 0;
}

/**
 * Diz se um item da grade fixa está ativo numa determinada data,
 * considerando a periodicidade (semanal ou quinzenal).
 */
function fixoAtivoNaData(fixo, isoDate) {
  if (fixo.periodicidade !== "quinzenal") return true;
  const naSemanaA = ehSemanaA(isoDate);
  return fixo.semana === "B" ? !naSemanaA : naSemanaA;
}
