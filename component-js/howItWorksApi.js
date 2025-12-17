/* Minimal API helper for howItWorks demo */
(function (global) {
  const basePrefix = '/api/v1';

  async function fetchStructure() {
    const url = `${basePrefix}/core-data/content/structure/`; 
    const res = await fetch(url, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('Failed to fetch structure');
    return res.json();
  }

  async function fetchTopics({ subject, book, chapter, page = 1, page_size = 20 } = {}) {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    if (book) params.set('book', book);
    if (chapter) params.set('chapter', chapter);
    params.set('page', page);
    params.set('page_size', page_size);

    const url = `${basePrefix}/core-data/content/topics/?${params.toString()}`;
    const res = await fetch(url, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('Failed to fetch topics');
    return res.json();
  }

  async function fetchTopicDetail({ topic, learner } = {}) {
    const params = new URLSearchParams();
    if (topic) params.set('topic', topic);
    if (learner) params.set('learner', learner);
    const url = `${basePrefix}/core-data/content/topic-detail/?${params.toString()}`;
    const res = await fetch(url, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('Failed to fetch topic detail');
    return res.json();
  }

  async function generatePersonalized({ learner_id, topic_id, demoToken = 'demo-token' } = {}) {
    const url = `${basePrefix}/personalization/generate/`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-DEMO-AUTH': demoToken,
      },
      body: JSON.stringify({ learner_id, topic_id }),
      credentials: 'same-origin',
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to generate personalized content: ${text}`);
    }
    return res.json();
  }

  global.howItWorksApi = { fetchStructure, fetchTopics, fetchTopicDetail, generatePersonalized };
})(window);
